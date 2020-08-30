const assert = require('assert');

function TreeNode(val, right = null, left = null) {
  this.val = val;
  this.left = left;
  this.right = right;
}

function breadthFirstFromArray(array, i = 0) {
  if (!array[i]) {
    return null;
  }

  const node = new TreeNode(array[i]);

  node.left = breadthFirstFromArray(array, i * 2 + 1);
  node.right = breadthFirstFromArray(array, i * 2 + 2);

  return node;
}

function preOrder(root) {
  function helper(node, result) {
    if (!node) {
      return result;
    }

    result.push(node.val);
    helper(node.left, result);
    helper(node.right, result);

    return result;
  }

  return helper(root, []);
}

function postOrder(root) {
  function helper(node, result) {
    if (!node) {
      return result;
    }

    helper(node.left, result);
    helper(node.right, result);
    result.push(node.val);

    return result;
  }

  return helper(root, []);
}

function inOrder(root) {
  function helper(node, result) {
    if (!node) {
      return result;
    }

    helper(node.left, result);
    result.push(node.val);
    helper(node.right, result);

    return result;
  }

  return helper(root, []);
}

/*

[1, 2, 3, 4, 5, 6]
Output : Root of the following tree
                  1
                /   \
               2     3
              / \    /
             4   5  6

Pre-order: [1,2,4,5,3,6]
In-order: [4,2,5,1,6,3]
Post-order: [4,5,2,6,3,1]

*/

const root = breadthFirstFromArray([1, 2, 3, 4, 5, 6]);

const preOrderArray = preOrder(root);
const inOrderArray = inOrder(root);
const postOrderArray = postOrder(root);

console.log('preOrder:', preOrderArray);
console.log('inOrder:', inOrderArray);
console.log('postOrder:', postOrderArray);

assert(preOrderArray.toString() === '1,2,4,5,3,6');
assert(inOrderArray.toString() === '4,2,5,1,6,3');
assert(postOrderArray.toString() === '4,5,2,6,3,1');
