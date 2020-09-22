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

function inOrderTraversal(num, node, result = []) {
  if (node === null) {
    return -1;
  }

  inOrderTraversal(num, node.left, result);
  if (num < node.key) {
    return result;
  }
  result.push(node.key);
  inOrderTraversal(num, node.right, result);

  return result;
}

BinarySearchTree.prototype.findLargestSmallerKey = function (num) {
  const sortedArray = inOrderTraversal(num, this.root);

  if (num < sortedArray[0]) {
    return -1;
  }

  return sortedArray[sortedArray.length - 1];
};

// Creates a new node by a key and inserts it to the BST
BinarySearchTree.prototype.insert = function (key) {
  var root = this.root;

  // 1. If the tree is empty, create the root
  if (!root) {
    this.root = new TreeNode(key);
    return;
  }

  // 2) Otherwise, create a node with the key
  //    and traverse down the tree to find where to
  //    to insert the new node
  var currentNode = root;
  var newNode = new TreeNode(key);

  while (currentNode !== null) {
    if (key < currentNode.key) {
      if (!currentNode.left) {
        currentNode.left = newNode;
        newNode.parent = currentNode;
        break;
      } else {
        currentNode = currentNode.left;
      }
    } else {
      if (!currentNode.right) {
        currentNode.right = newNode;
        newNode.parent = currentNode;
        break;
      } else {
        currentNode = currentNode.right;
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

var result = bst.findLargestSmallerKey(17);

console.log('Largest smaller number is ' + result);
