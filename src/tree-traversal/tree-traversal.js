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
  if (node === null) {
    return '';
  }

  const left = postOrder(node.left);
  const right = postOrder(node.right);
  return `${left}${right} ${node.data}`;
}

const tree = arrayToTree([10, 1, 2, 3, 4, 5, 6]);

console.log(postOrder(tree));
// 3 4 1 5 6 2 10
