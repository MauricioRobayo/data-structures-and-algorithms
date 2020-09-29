function getDifferentNumber(arr) {
  for (let i = 0; i < arr.length; i++) {
    const index = arr[i] === -Infinity ? 0 : Math.abs(arr[i]);
    if (index < arr.length) {
      if (arr[index] === 0) {
        arr[index] = -Infinity;
      } else arr[index] *= -1;
    }
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 0) {
      return i;
    }
  }

  return arr.length;
}

const arr = [0, 1, 2, 3];

console.log(getDifferentNumber(arr));
// 4
