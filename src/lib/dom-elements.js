export const canvas = document.createElement('canvas');
canvas.width = 1920;
canvas.height = 1080;

export const fpsCounter = document.createElement('span');
fpsCounter.style.cssText = `
  position: absolute;
  top: 1046px;
  right: 5px;

  font-family: sans-serif;

  display: block;
  padding: 5px;
  background-color: #ccc;
  border-radius: 5px;
`;
