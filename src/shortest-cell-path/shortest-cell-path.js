function shortestCellPath(grid, sr, sc, tr, tc) {
  /**
	@param grid: integer[][]
	@param sr: integer
	@param sc: integer
	@param tr: integer
	@param tc: integer
	@return: integer
	*/

  const queue = [];
  const visited = new Set();

  queue.push([sr, sc, 0]);

  while (queue.length > 0) {
    const [cr, cc, d] = queue.shift();
    visited.add([cr, cc].join());

    if (cr === tr && cc === tc) {
      return d;
    }

    [
      [cr, cc - 1],
      [cr, cc + 1],
      [cr - 1, cc],
      [cr + 1, cc],
    ].forEach(([nr, nc]) => {
      if (visited.has([nr, nc].join())) {
        return;
      }
      if (grid[nr] && grid[nr][nc] === 1) {
        queue.push([nr, nc, d + 1]);
      }
    });
  }

  return -1;
}

const grid = [
  [1, 1, 1, 1],
  [1, 1, 1, 1],
  [0, 0, 0, 1],
  [1, 1, 1, 1],
];
const sr = 1;
const sc = 0;
const tr = 3;
const tc = 0;

const shortestPathDistance = shortestCellPath(grid, sr, sc, tr, tc);

console.log(shortestPathDistance);
