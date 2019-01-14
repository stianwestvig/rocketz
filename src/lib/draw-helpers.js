function drawScaledPixel(state, x, y) {
  const {
    c,
    xOffset = 0,
    yOffset = 0,
    scale = 1,
    fillStyle = 'black'
  } = state;
  c.beginPath();
  c.fillStyle = fillStyle;
  c.fillRect(x * scale + xOffset, y * scale + yOffset, scale, scale);
}

export function drawLine(state, pixels) {
  pixels.forEach((pixel, index) => drawScaledPixel(
    {
      ...state,
      fillStyle: pixel,
      scale: state.position.scale,
      xOffset: state.position.x,
      yOffset: state.position.y + state.row * state.position.scale
    },
    index, 0)
  );
}

export function drawAnySprite(sprite, state) {
  const { themeMap } = state;
  sprite.forEach((line, index) => drawLine(
    { ...state, row: index },
    line.map(key => themeMap.get(key))
  ));
}