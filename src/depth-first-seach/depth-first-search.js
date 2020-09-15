function dfs(graph) {
  const stack = [0];
  const result = [];

  while (stack.length > 0) {
    const current = stack.pop();
    result.push(current);
    graph[current].reverse().forEach((neighbor) => {
      if (!result.includes(neighbor)) {
        stack.push(neighbor);
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

console.log(dfs(graph));
// [0, 2, 5, 4, 1, 3]
