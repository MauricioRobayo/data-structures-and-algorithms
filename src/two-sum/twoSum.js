function twoSum(nums, target) {
  const seen = new Map();

  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];
    if (seen.has(diff)) {
      return [seen.get(diff), i];
    }
    seen.set(nums[i], i);
  }
  return [];
}

const nums = [2, 7, 11, 15];
const target = 9;
console.log(twoSum(nums, target)); // [0,1]
