function bfs(graph) {
  const queue = [0];
  const result = [];

  while (queue.length > 0) {
    const current = queue.shift();
    result.push(current);
    graph[current].forEach((neighbor) => {
      if (!result.includes(neighbor)) {
        queue.push(neighbor);
      }
    });
  }

  return result;
}

const graph = {
  0: [2],
  1: [4],
  2: [5, 0, 3],
  3: [2],
  4: [1, 5],
  5: [4, 2],
};

console.log(bfs(graph));
// [0, 2, 5, 3, 4, 1]
