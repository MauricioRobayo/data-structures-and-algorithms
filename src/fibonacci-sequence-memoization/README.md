# Fibonacci Sequence Memoization

So we know we simply recursively call a method that returns the sum of the previous two fibonacci numbers.

If we look closely at the recursive tree, we can see that the function is computed twice for f(3), thrice for f(2) and many times for the base cases f(1) and f(0). The overall complexity of this pseudo-code is therefore exponential O($2^n$). We can very well see how we can achieve massive speedups by storing the intermediate results and using them when needed.
