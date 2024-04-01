import canvasSketch from 'canvas-sketch';

const settings = {
  dimensions: [1080, 1080],
};

const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');

const isDarkMode = darkModeQuery.matches;

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = isDarkMode ? 'black' : 'white';

    context.strokeStyle = isDarkMode ? 'white' : 'black';

    context.fillRect(0, 0, width, height);
    context.lineWidth = width * 0.01;

    const w = width * 0.1;
    const h = height * 0.1;
    const gap = width * 0.03;
    const ix = width * 0.17;
    const iy = height * 0.17;
    const offset = width * 0.02;

    let x, y;

    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++) {
        x = ix + (w + gap) * i;
        y = iy + (w + gap) * j;

        context.beginPath();
        context.rect(x, y, w, h);
        context.stroke();

        // inner squares
        if (Math.random() > 0.5) {
          context.beginPath();
          context.rect(x + offset / 2, y + offset / 2, w - offset, h - offset);
          context.stroke();
        }
      }
    }
  };
};

canvasSketch(sketch, settings);
