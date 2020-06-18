function bfs(graph) {
  const queue = [0];
  const result = [0];
  while (queue.length > 0) {
    const current = queue.shift();
    graph[current].forEach((neighbor) => {
      if (result.includes(neighbor)) {
        return;
      }
      queue.push(neighbor);
      result.push(neighbor);
    });
  }
  return result;
}
const g = {
  0: [2],
  1: [4],
  2: [5, 0, 3],
  3: [2],
  4: [1, 5],
  5: [4, 2],
};
// eslint-disable-next-line no-console
console.log(bfs(g));
// [0, 2, 5, 3, 4, 1]
