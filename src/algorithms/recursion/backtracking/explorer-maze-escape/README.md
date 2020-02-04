# Explorer Maze Escape

Given a map of the area (as a square grid), can you help the Explorer find the way from position [0,0] to the goal? The explorer can go right or down within in the grid, and cannot go through walls.

## Format

Input

- n\*n square consisting of 0's, 1's and one 9.
- 0's mark empty space.
- 1's are walls.
- 9 is the goal.

Output

Return the (shortest) path to the goal. Return an array with each position [x, y] in the path to the goal.

Sample Input

```
0 0 0 0 0
0 1 0 1 0
0 1 0 1 1
0 1 0 0 0
0 0 0 1 9
```

Sample Output

```
[
  [0, 0],
  [1, 0],
  [2, 0],
  [2, 1],
  [2, 2],
  [2, 3],
  [3, 3],
  [4, 3],
  [4, 4]
]
```

## Explanation

Starting from `[0,0]` on the top left, the Explorer can reach the goal at `[4,4]` by following the printed path, as shown here:

```
→ → ⤵ 0 0
0 1 ↓ 1 0
0 1 ↓ 1 1
0 1 ⤷ → ⤵
0 0 0 1 9
```

## Challenge

Return the (shortest) path to the goal!
