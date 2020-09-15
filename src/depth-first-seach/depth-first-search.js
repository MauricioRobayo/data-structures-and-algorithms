function dfsRecursive(graph) {
  const result = [];

  function helper(graph, node) {
    result.push(node);

    graph[node].forEach((neighbor) => {
      if (result.includes(neighbor)) {
        return;
      }

      helper(graph, neighbor);
    });
  }

  helper(graph, 0);

  return result;
}

function dfsIterative(graph) {
  const stack = [0];
  const result = [];

  while (stack.length > 0) {
    const current = stack.pop();
    result.push(current);

    /*
      We reverse the array of neighbors because we want to meet this condition:
      For this challenge, visit equivalent nodes in the same order as their input.
      For example, 5 comes before 3 in the output since it was before 3 in the input.
      
      input: {
        0: [2],
        1: [4],
        2: [5, 0, 3],
        3: [2],
        4: [1, 5],
        5: [4, 2],
      };
      
      output: [0, 2, 5, 4, 1, 3]
    */
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

console.log(dfsRecursive(graph));
// [0, 2, 5, 4, 1, 3]

console.log(dfsIterative(graph));
// [0, 2, 5, 4, 1, 3]
