const assert = require('assert');

function TreeNode(val, left = null, right = null) {
  this.val = val;
  this.left = left;
  this.right = right;
}

function BST() {
  this.root = null;
}

BST.prototype.insert = function (node, root = this.root) {
  if (!root) {
    root = node; // eslint-disable-line
  }
  console.log(this.root);
};

BST.prototype.preOrder = function () {};

function bst(array) {
  const binarySearchTree = new BST();

  array.forEach((e) => {
    const node = new TreeNode(e);
    binarySearchTree.insert(node);
  });

  return binarySearchTree.preOrder().join('');
}

const array = [8, 3, 10, 1, 6, 14, 4, 7, 13];
assert(bst(array) === '8 3 1 6 5 7 10 14 13');

/*

[8, 3, 10, 1, 6, 14, 4, 7, 13]

        8
      /  \
    3    10
    / \     \
  1   6     14
      / \    /
    4   7  13

'8 3 1 6 5 7 10 14 13'

1. if root === null { insert node in root }
2. if node < root { call function root.left as root}
3. if node > root { call function root.right as root}

node = 8
root = null
root = 8

node = 3
root = 8


*/
