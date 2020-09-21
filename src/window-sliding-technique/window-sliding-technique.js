function maxSum(arr, k) {
  let tail = 0;
  let head = tail + (k - 1);
  let sum = arr[0];

  for (let i = 1; i < k; i++) {
    sum += arr[i];
  }

  let max = sum;

  while (head < arr.length - 1) {
    sum -= arr[tail++];
    sum += arr[++head];
    max = Math.max(max, sum);
  }

  return max;
}

const arr = [1, 4, 2];
console.log(maxSum(arr, 3));
