function getProduct(arr) {
  return arr.reduce((product, value) => product * value, 1);
}

function arrayOfArrayProducts(arr) {
  const result = [];

  if (arr.length <= 1) {
    return result;
  }

  const left = [];
  for (let i = 1; i < arr.length; i++) {
    left.push(getProduct(arr.slice(i)));
  }
  left.push(1);

  const right = [];
  for (let i = arr.length - 1; i >= 1; i--) {
    right.unshift(getProduct(arr.slice(0, i)));
  }
  right.unshift(1);

  for (let i = 0; i < arr.length; i++) {
    result.push(left[i] * right[i]);
  }

  return result;
}

const arr = [2, 7, 3, 4];
console.log(arrayOfArrayProducts(arr));
