# Stacks or Recursion

While certain coding problems can be solved most effectively with recursion, you can also learn how to do them without it.

## Trees, Recursion & Stacks

Trees are recursive structures, so most tree algorithms use recursion to 'branch out' through the tree.

> Q: How does the compiler keep track of all these recursive calls?
>
> A: Each function call is placed on a Stack, and is popped off the stack as the results are returned.
>
> Q: Could I use my own Stack to track results instead of using recursion?
>
> A: Yes, you can always replace recursion with a Loop and a Stack. It will usually make your code much messier, but there are rare occasions when you'll want to do it.

## Challenge

Find How Tall is the Tree? by using a Stack and a Loop.

## Details

The height of a Tree is the number of Nodes from the Root to the lowest Leaf. The Tree does not need to be balanced.
For example, in the tree below, the height is 4:

![stack or recursion](stack_or_recursion.svg)

You will be given a Tree stored in a list. Find and print the height of the Tree.

## Examples

The following are 3 test cases:

```ruby
puts tree_height([2, 7, 5, 2, 6, 0, 9])
# => 3

puts tree_height([1, 7, 5, 2, 6, 0, 9, 3, 7, 5, 11, 0, 0, 4, 0])
# => 4

puts tree_height([5, 3, 2, 9, 0, 0, 7, 0, 0, 0, 0, 0, 0, 5, 0])
# => 4
```
