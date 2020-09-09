function TreeNode(val = 0, left = null, right) {
  this.val = val;
  this.left = left;
  this.right = right;
}

function buildBT(array) {
  const root = new TreeNode(array[0]);
  const queue = [root];

  for (let i = 0; i < array.length; ) {
    const current = queue.shift();

    if (current === null) {
      continue;
    }

    i++;

    if (i >= array.length) {
      break;
    }

    if (array[i] === null) {
      current.left = null;
    } else {
      current.left = new TreeNode(array[i]);
    }

    i++;

    if (i >= array.length) {
      break;
    }

    if (array[i] === null) {
      current.right = null;
    } else {
      current.right = new TreeNode(array[i]);
    }

    queue.push(current.left);
    queue.push(current.right);
  }

  return root;
}

function inOrderTraversal(root) {
  const res = [];
  const stack = [];
  let curr = root;

  while (stack.length > 0 || curr) {
    while (curr) {
      stack.push(curr);
      curr = curr.left;
    }
    curr = stack.pop();
    res.push(curr.val);
    curr = curr.right;
  }
  return res;
}

const array = [
  1,
  null,
  2,
  null,
  3,
  4,
  5,
  6,
  null,
  7,
  8,
  null,
  9,
  10,
  11,
  12,
  null,
  13,
  14,
];
// const array = [1, null, 2, 3, 4, 5];

const tree = buildBT(array);
console.log(inOrderTraversal(tree));
// [1,2,6,13,9,14,4,3,10,7,11,5,12,8]
