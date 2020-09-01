// eslint-disable-next-line
function TreeNode(val = 0, left = null, right) {
  this.val = val;
  this.left = left;
  this.right = right;
}

// eslint-disable-next-line
function buildBT(array) {}

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

const array = [1, null, 2, 3];
const tree = buildBT(array);
console.log(inOrderTraversal(tree));
