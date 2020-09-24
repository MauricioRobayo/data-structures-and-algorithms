function getDifferentNumber(arr) {
  const sortedArray = arr.sort((a, b) => a - b);
  let i = 0;
  while (i === sortedArray[i]) {
    i++;
  }
  return i;
}

const arr = [0, 1, 2, 3];
console.log(getDifferentNumber(arr));
// 4
