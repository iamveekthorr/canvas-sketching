const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [1080, 1080],
};

const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');

const isDarkMode = darkModeQuery.matches;

/**
 *
 * @param {number} deg
 * @returns {number} radiant
 */
const degreeToRadiant = (deg) => (deg / 180) * Math.PI;
const range = (max, min) => Math.random() * (max - min) + min;

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = isDarkMode ? 'black' : 'white';
    context.strokeStyle = isDarkMode ? 'white' : 'black';

    context.fillRect(0, 0, width, height);

    context.fillStyle = isDarkMode ? 'white' : 'black';

    const cx = width * 0.5;
    const cy = height * 0.5;
    const w = width * 0.01;
    const h = height * 0.1;

    const numberOfRectangles = 12;
    const radius = width * 0.3;

    let x, y;

    for (let i = 0; i < numberOfRectangles; i++) {
      const sizeOfSlice = degreeToRadiant(360 / numberOfRectangles);
      const angle = sizeOfSlice * i;

      x = cx + radius * Math.sin(angle);
      y = cy + radius * Math.cos(angle);

      context.save();
      context.translate(x, y);
      context.rotate(-angle);
      context.scale(range(1, 3), 1);

      context.beginPath();
      context.rect(w * 0.5, h * 0.5, w, h);
      context.fill();
      context.restore();
    }
  };
};

canvasSketch(sketch, settings);
