# Creating a Tree

Convert a Tree from an Array to the more-standard Node form?

Implementing a Tree

To implement a Tree, we'll create a Node class. It will store an integer of Data, and point to 2 child Nodes.

```js
function TreeNode(data, left = null, right = null) {
  this.data = data;
  this.left = left;
  this.right = right;
}
```

1. Create a Node node from a given cell i in the array.
2. Create the children Nodes from their positions in the array.
3. Assign the children Nodes to node.left and node.right.

You first create a Node, and then you create children Nodes in the same manner.

Here's the above algorithm:

```js
function arrayToTree(array, i) {
  if (i >= array.length || array[i] === 0) {
    return null;
  }

  const node = new TreeNode(array[i]);

  node.left = arrayToTree(array, 2 * i + 1);
  node.right = arrayToTree(array, 2 * i + 2);

  return node;
}
```

## Traversing a Tree in Pre-order

Pre-order traversal means you process a Node and then process its sub-trees.

Here is the pre-order algorithm:

```js
function preOrder(node) {
  if (node === null) {
    return '';
  }

  return `${node.data} ${helper(node.left)} ${helper(node.right)}`;
}
```

## Challenge

You will be given an array as input, which represents a Tree. Process the array into a Tree of Nodes, as shown above. Then go through the tree and print it in post-order.

Print each number space-separated.

Example test case

```js
const tree = arrayToTree([10, 1, 2, 3, 4, 5, 6]);

console.log(postOrder(tree));
// 3 4 1 5 6 2 10
```
