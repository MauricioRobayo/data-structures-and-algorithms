function fib(num) {
  if (num <= 1) {
    return num;
  }

  return fib(num - 1) + fib(num - 2);
}

function fibMemo(num) {
  const memo = new Map();
  function fib(num) {
    if (num <= 1) {
      return num;
    }

    if (memo.has(num)) {
      return memo.get(num);
    }

    const result = fib(num - 1) + fib(num - 2);
    memo.set(num, result);
    return result;
  }
  return fib(num);
}

const num = 45;
console.log(fib(num));
console.log(fibMemo(num));

/*
0 => 0
1 => 1
2 => fib(num - 1) + fib(num - 2)
3 => fib(num - 1) + fib(num - 2)
     fib(2) + fib(1)
     fib(1) + fib(0) + 1
     1 + 0 + 1

*/
