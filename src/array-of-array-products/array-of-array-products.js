function arrayOfArrayProducts(arr) {
  if (arr.length <= 1) {
    return [];
  }

  const result = [1];

  for (let i = 0; i < arr.length - 1; i++) {
    result.push(result[i] * arr[i]);
  }

  let product = 1;
  for (let i = arr.length - 1; i > 0; i--) {
    product *= arr[i];
    result[i - 1] = result[i - 1] * product;
  }

  return result;
}

console.log(arrayOfArrayProducts([2, 7, 3, 4]));
// output: [84, 24, 56, 42]
