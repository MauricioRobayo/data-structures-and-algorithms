// Constructor to create a new Node
function Node(key) {
  this.key = key;
  this.parent = null;
  this.left = null;
  this.right = null;
}

// Constructor to create a new BST
function BinarySearchTree() {
  this.root = null;
}

function min(root) {
  if (root.left === null) {
    return root;
  }

  return min(root.left);
}

BinarySearchTree.prototype.findInOrderSuccessor = function (inputNode) {
  if (inputNode.right) {
    return min(inputNode.right);
  }

  let { parent } = inputNode;
  let child = inputNode;

  while (parent !== null && parent.right === child) {
    child = parent;
    parent = parent.parent;
  }

  return parent;
};

// Creates a new node by a key and inserts it to the BST
BinarySearchTree.prototype.insert = function (key) {
  const { root } = this;

  // 1. If the tree is empty, create the root
  if (!root) {
    this.root = new Node(key);
    return;
  }

  // 2) Otherwise, create a node with the key
  //    and traverse down the tree to find where to
  //    to insert it
  let currentNode = root;
  const newNode = new Node(key);

  while (currentNode !== null) {
    if (key < currentNode.key) {
      if (!currentNode.left) {
        currentNode.left = newNode;
        newNode.parent = currentNode;
        break;
      } else {
        currentNode = currentNode.left;
      }
    } else if (!currentNode.right) {
      currentNode.right = newNode;
      newNode.parent = currentNode;
      break;
    } else {
      currentNode = currentNode.right;
    }
  }
};

// Returns a reference to a node in the BST by its key.
// Use this function when you need a node to test your
// findInOrderSuccessor function on.
BinarySearchTree.prototype.getNodeByKey = function (key) {
  let currentNode = this.root;

  while (currentNode) {
    if (key === currentNode.key) {
      return currentNode;
    }

    if (key < currentNode.key) {
      currentNode = currentNode.left;
    } else {
      currentNode = currentNode.right;
    }
  }

  return null;
};

/** *******************************************
 * Driver program to test above function     *
 ******************************************** */

// Create a Binary Search Tree
const bst = new BinarySearchTree();
bst.insert(8);
bst.insert(3);
bst.insert(10);
bst.insert(1);
bst.insert(6);
bst.insert(4);
bst.insert(7);
bst.insert(10);
bst.insert(14);
bst.insert(13);

const assert = require('assert');

assert(bst.findInOrderSuccessor(bst.getNodeByKey(3)).key === 4);
assert(bst.findInOrderSuccessor(bst.getNodeByKey(7)).key === 8);
assert(bst.findInOrderSuccessor(bst.getNodeByKey(14)) === null);
