const SHIP_SIZE = 45;
const MAX_ACCELLERATION = 5;

export function drawPlayerModel(state) {
    const { c, player } = state;
    const { x, y } = player.position;
    
    c.beginPath();
    c.moveTo(x, y);
    c.lineTo(x + SHIP_SIZE, y + SHIP_SIZE);
    c.lineTo(x + SHIP_SIZE, y - SHIP_SIZE);
    c.fill();
}

export function rotatePlayer(state, clockwise = true) {
    const { c, player } = state;
    const { x, y } = player.position;
    const severity = clockwise ? player.rotation.speed : -player.rotation.speed;
    const { offset_x, offset_y } = calculateCenter(x, y, SHIP_SIZE, SHIP_SIZE);

    c.translate(offset_x, offset_y);
    c.rotate(toDegrees(severity));
    c.translate(-offset_x, -offset_y);   
}

function toDegrees(radians) {
    return radians * Math.PI / 180;
}

function calculateCenter(x, y, width, height) {
    return {
        offset_x: x + width / 2,
        offset_y: y + height / 2
    }
}

function calculateVector(x, y, degrees, accelleration) {
    const rotation = toDegrees(degrees);
    return { 
        x: accelleration.x * Math.cos(rotation) + x,
        y: accelleration.y * Math.sin(rotation) + y
    }
}

export function acceleratePlayer(state) {
    const { player } = state;

    state.player.accelleration = {
        x: player.accelleration.x > MAX_ACCELLERATION ? MAX_ACCELLERATION : player.accelleration.x + 0.1,
        y: player.accelleration.y > MAX_ACCELLERATION ? MAX_ACCELLERATION : player.accelleration.y + 0.1
    };
}

export function movePlayer(state) {
    const { player } = state;
    const { x, y } = player.position;
    const { degrees } = player.rotation;
    
    state.player.position = calculateVector(x, y, degrees, player.accelleration);
}

