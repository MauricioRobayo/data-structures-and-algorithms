function TreeNode(val = 0, left = null, right = null) {
  this.val = val;
  this.left = left;
  this.right = right;
}

const sortedArrayToBST = function (nums) {
  if (nums.length === 0) {
    return null;
  }

  const arrMiddle = Math.floor(nums.length / 2);
  const middleEl = nums[arrMiddle];

  const node = new TreeNode(middleEl);

  node.left = sortedArrayToBST(nums.slice(0, arrMiddle));
  node.right = sortedArrayToBST(nums.slice(arrMiddle + 1));

  return node;
};

console.log(sortedArrayToBST([-10, -3, 0, 5, 9]));
