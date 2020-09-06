function TreeNode(data) {
  this.data = data;
  this.left = null;
  this.right = null;
}

function arrayToTree(array) {
  function helper(array, i) {
    if (i >= array.length || array[i] === null) {
      return null;
    }

    const node = new TreeNode(array[i]);

    node.left = helper(array, i * 2 + 1);
    node.right = helper(array, i * 2 + 2);

    return node;
  }

  return helper(array, 0);
}

function postOrder(node) {
  const stack = [];
  const visited = [];
  let result = '';
  let currentNode = node;

  while (stack.length > 0 || currentNode) {
    while (currentNode) {
      stack.push(currentNode);
      currentNode = currentNode.left;
    }

    const root = stack[stack.length - 1];
    const right = root.right;
    if (right && !visited.includes(right)) {
      currentNode = right;
    } else {
      currentNode = stack.pop();
      result += ` ${currentNode.data}`;
      visited.push(currentNode);
      currentNode = null;
    }
  }

  return result.slice(1);
}

const tree = arrayToTree([10, 1, 2, 3, 4, 5, 6]);

console.log(postOrder(tree));
// 3 4 1 5 6 2 10
