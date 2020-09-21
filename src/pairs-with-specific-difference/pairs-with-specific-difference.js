function findPairsWithGivenDifference(arr, k) {
  const set = new Set(arr);

  const result = [];
  for (let y = 0; y < arr.length; y++) {
    const x = k + arr[y];
    if (set.has(x)) {
      result.push([x, arr[y]]);
    }
  }
  return result;
}

console.log(findPairsWithGivenDifference([0, -1, -2, 2, 1], 0));
