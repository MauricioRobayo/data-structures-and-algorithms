# BST Successor Search

In a Binary Search Tree (BST), an Inorder Successor of a node is defined as the node with the smallest key greater than the key of the input node (see examples below). Given a node inputNode in a BST, you’re asked to write a function findInOrderSuccessor that returns the Inorder Successor of inputNode. If inputNode has no Inorder Successor, return null.

Explain your solution and analyze its time and space complexities.

![Inorder Successor](https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Binary_search_tree.svg/1920px-Binary_search_tree.svg.png)

In this diagram, the inorder successor of 3 is 4 and the inorder successor of 7 is 8.

Example:

In the diagram above, for inputNode whose key = 3

Your function would return:

The Inorder Successor node whose key = 4
