function TreeNode(val, left = null, right = null) {
  this.val = val;
  this.left = left;
  this.right = right;
}

function BST() {
  this.root = null;
}

BST.prototype.insert = function (node) {
  if (!this.root) {
    this.root = node;
    return;
  }

  let currentNode = this.root;

  while (currentNode) {
    if (node.val < currentNode.val) {
      if (currentNode.left === null) {
        currentNode.left = node;
        break;
      } else {
        currentNode = currentNode.left;
      }
    } else {
      if (currentNode.right === null) {
        currentNode.right = node;
        break;
      } else {
        currentNode = currentNode.right;
      }
    }
  }
};

BST.prototype.preOrder = function () {
  function helper(node) {
    if (node === null) {
      return '';
    }

    return `${node.val} ${helper(node.left)}${helper(node.right)}`;
  }

  return helper(this.root).trim();
};

const array = [8, 3, 10, 1, 6, 14, 4, 7, 13];
const binarySearchTree = new BST();

array.forEach((e) => {
  const node = new TreeNode(e);
  binarySearchTree.insert(node);
});

console.log(binarySearchTree.preOrder());

// '8 3 1 6 4 7 10 14 13'

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
