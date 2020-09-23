// Constructor to create a new Node
function TreeNode(key) {
  this.key = key;
  this.parent = null;
  this.left = null;
  this.right = null;
}

// Constructor to create a new BST
function BinarySearchTree() {
  this.root = null;
}

BinarySearchTree.prototype.findLargestSmallerKey = function (num) {
  let currentNode = this.root;
  let largestSmaller = null;

  while (currentNode) {
    if (num < currentNode.key) {
      currentNode = currentNode.left;
    } else {
      largestSmaller = currentNode;
      currentNode = currentNode.right;
    }
  }

  return largestSmaller ? largestSmaller.key : -1;
};

// Creates a new node by a key and inserts it to the BST
BinarySearchTree.prototype.insert = function (key) {
  const newNode = new TreeNode(key);

  if (this.root === null) {
    this.root = newNode;
    return;
  }

  let currentNode = this.root;

  while (currentNode) {
    if (key < currentNode.key) {
      if (currentNode.left) {
        currentNode = currentNode.left;
      } else {
        currentNode.left = newNode;
        break;
      }
    } else {
      if (currentNode.right) {
        currentNode = currentNode.right;
      } else {
        currentNode.right = newNode;
        break;
      }
    }
  }
};

/*********************************************
 * Driver program to test above function     *
 *********************************************/

// Create a Binary Search Tree
var bst = new BinarySearchTree();
bst.insert(20);
bst.insert(9);
bst.insert(25);
bst.insert(5);
bst.insert(12);
bst.insert(11);
bst.insert(14);

var result = bst.findLargestSmallerKey(27);

console.log('Largest smaller number is ' + result);
