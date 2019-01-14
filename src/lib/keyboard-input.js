export function handleKeyUp(event, input) {
  if (event.keyCode === 68) {
    // D key
    input.isRight = false;
  }

  if (event.keyCode === 65) {
    // A key
    input.isLeft = false;
  }

  if (event.keyCode === 83) {
    // S key
    input.isDown = false;
  }

  if (event.keyCode === 87) {
    // W key
    input.isUp = false;
  }
}

export function handleKeyDown(event, input) {
  if (event.keyCode === 68) {
    // D key
    input.isRight = true;
  }

  if (event.keyCode === 65) {
    // A key
    input.isLeft = true;
  }

  if (event.keyCode === 83) {
    // S key
    input.isDown = true;
  }

  if (event.keyCode === 87) {
    // W key
    input.isUp = true;
  }
}