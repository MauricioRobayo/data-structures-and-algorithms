function indexEqualsValueSearch(arr) {
  let head = 0;
  let tail = arr.length - 1;
  let lowestIndex = Infinity;

  while (head <= tail) {
    const middle = Math.floor((tail + head) / 2);
    if (middle === arr[middle]) {
      lowestIndex = middle;
      tail = middle - 1;
    }
    if (middle < arr[middle]) {
      tail = middle - 1;
    } else {
      head = middle + 1;
    }
  }
  return lowestIndex === Infinity ? -1 : lowestIndex;
}

const arr = [0];
console.log(indexEqualsValueSearch(arr));
