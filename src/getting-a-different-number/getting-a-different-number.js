function getDifferentNumber(arr) {
  const set = new Set(arr);
  let i = 0;

  while (set.has(i)) {
    i++;
  }

  return i;
}

const arr = [0, 1, 2, 3];

console.log(getDifferentNumber(arr));
// 4
