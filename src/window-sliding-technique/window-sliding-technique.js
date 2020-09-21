function maxSum(arr, k) {
  // O(n * k)
  let max = 0;
  for (let i = 0; i < arr.length - (k - 1); i++) {
    let sum = arr[i];
    for (let j = 1; j < k; j++) {
      sum += arr[i + j];
    }
    if (sum > max) {
      max = sum;
    }
  }

  return max;
}

const arr = [100, 200, 300, 400];
console.log(maxSum(arr, 2));

/*
Input  : arr[] = {100, 200, 300, 400}

max = 0
i = 0

sum = arr[0] 100
j = 1
sum += 300



*/
