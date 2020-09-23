function TreeNode(key) {
  this.key = key;
  this.left = null;
  this.right = null;
}

function BinaryTree() {
  this.root = 'null';
}

BinaryTree.prototype.buildFromArry = function (arr) {
  this.root = new TreeNode(arr[0]);
  const queue = [this.root];

  for (let i = 1; i < arr.length; i++) {
    const currentNode = queue.shift();

    if (arr[i] !== null) {
      currentNode.left = new TreeNode(arr[i]);
      queue.push(currentNode.left);
    }

    i++;

    if (i < arr.length && arr[i] !== null) {
      currentNode.right = new TreeNode(arr[i]);
      queue.push(currentNode.right);
    }
  }
};

function reverseArray(array) {
  let left = 0;
  let right = array.length - 1;
  while (left < right) {
    [array[left], array[right]] = [array[right], array[left]];
    left++;
    right--;
  }
  return array;
}

function levelOrderBottom(root) {
  const queue = [root];
  const result = [];
  while (queue.length > 0) {
    const levelCount = queue.length;
    const levelNodes = [];
    for (let i = 0; i < levelCount; i++) {
      const currentNode = queue.shift();
      levelNodes.push(currentNode.key);
      if (currentNode.left) {
        queue.push(currentNode.left);
      }
      if (currentNode.right) {
        queue.push(currentNode.right);
      }
    }
    result.push(levelNodes);
  }
  return reverseArray(result);
}

const treeArray = [3, 9, 20, null, null, 15, 7];

const bt = new BinaryTree();
bt.buildFromArry(treeArray);
console.log(bt);

console.log(levelOrderBottom(bt.root));
