# Running Time

The running time of an algorithm for a specific input is the number of operations executed. We usually want to know how many operations an algorithm will take in proportion to the size of its input, N. We will look at how many shifts Insertion Sort takes.

For each element V in an array of N numbers, InsertionSort shifts everything to the right until it can insert V into the array. If the array is already sorted, it will take 0 shifts to verify that.

The worst case for Insertion Sort is if the array is in reverse order. To insert each number, the algorithm will need to shift over that number to the beginning of the array. Sorting the entire array of N numbers will therefore take 1+2+...+(N-1) operations, or N2 / 2.

Can you modify your previous Insertion Sort code to keep track of the number of shifts it makes when sorting? The only thing you should print is the number of shifts your insertion sort makes to completely sort each test case. A shift is whenever an element is moved over in the array.

# Challenge

How many shifts does Insertion Sort take?

# Example

```ruby
puts running_time([2, 1, 3, 1, 2])
# => 4
```
