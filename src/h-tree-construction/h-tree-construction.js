function drawHTree(x, y, length, depth) {
  if (depth === 0) {
    return;
  }

  const halfLine = Math.floor(length / 2);
  const x1 = x - halfLine;
  const x2 = x + halfLine;

  const y1 = y - halfLine;
  const y2 = y + halfLine;

  drawLine(x1, x2, y, y);
  drawLine(x1, x1, y1, y2);
  drawLine(x2, x2, y1, y2);

  console.log('new h tree drawn');

  const newLength = length / Math.sqrt(length);

  drawHTree(x1, y1, newLength, depth - 1);
  drawHTree(x1, y2, newLength, depth - 1);
  drawHTree(x2, y1, newLength, depth - 1);
  drawHTree(x2, y2, newLength, depth - 1);
}

function drawLine(x1, x2, y1, y2) {
  console.log({ x1, x2, y1, y2 });
}

drawHTree(5, 5, 4, 2);
