function leftMostNodesSum(array, index = 0) {
  if (!array[index]) {
    return 0;
  }

  return array[index] + leftMostNodesSum(array, index * 2 + 1);
}

function leftMostNodesSumIterative(array) {
  let index = 0;
  let sum = 0;

  while (array[index]) {
    sum += array[index];
    index = index * 2 + 1;
  }

  return sum;
}

console.log(leftMostNodesSum([2, 7, 5, 2, 6, 0, 9]));
console.log(leftMostNodesSumIterative([2, 7, 5, 2, 6, 0, 9]));
