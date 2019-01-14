import { handleKeyDown, handleKeyUp } from './lib/keyboard-input';
import { canvas, fpsCounter } from './lib/dom-elements';
import {
  acceleratePlayer,
  drawPlayerModel,
  rotatePlayer,
  movePlayer
} from './modules/player';

function init() {
  window.addEventListener('keydown', (event) => handleKeyDown(event, state.input));
  window.addEventListener('keyup', (event) => handleKeyUp(event, state.input));

  document.body.appendChild(canvas);
  document.body.appendChild(fpsCounter);
}

init();
const c = canvas.getContext('2d');

let state = {
  c,
  input: {
    isRight: false,
    isLeft: false,
    isDown: false,
    isUp: false
  },
  player: {
    accelleration: {
      x: 0,
      y: 0
    },
    position: {
      x: 100,
      y: 100
    },
    rotation: {
      degrees: 0,
      speed: 3
    }
  }
}

const times = [];
let fps;

function draw() {
  const { input, player } = state;

  // measure frames per second
  const now = performance.now();
  while (times.length > 0 && times[0] <= now - 1000) {
    times.shift();
  }
  times.push(now);
  fps = times.length;
  fpsCounter.textContent = fps;

  c.clearRect(0, 0, canvas.width, canvas.height);

  // draw game here
  drawPlayerModel(state);

  input.isRight ? rotatePlayer(state, true) : null;
  input.isLeft ? rotatePlayer(state, false) : null;
  input.isUp ? acceleratePlayer(state) : null;
  player.accelleration.x || player.accelleration.y ? movePlayer(state) : null;

  // console.log(state.player.accelleration);


  window.requestAnimationFrame(draw);
}

window.requestAnimationFrame(draw);
