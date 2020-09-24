function findPairsWithGivenDifference(arr, k) {
  if (k === 0) {
    return [];
  }

  const xSet = new Set(arr);
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    const y = arr[i];
    const x = y + k;
    if (xSet.has(x)) {
      result.push([x, y]);
    }
  }

  return result;
}

const arr = [0, -1, -2, 2, 1];
const k = 1;
console.log(findPairsWithGivenDifference(arr, k));
