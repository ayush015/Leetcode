/*
Given a 2D grid of size m x n and an integer k. You need 
to shift the grid k times.

In one shift operation:

Element at grid[i][j] moves to grid[i][j + 1].
Element at grid[i][n - 1] moves to grid[i + 1][0].
Element at grid[m - 1][n - 1] moves to grid[0][0].
Return the 2D grid after applying shift operation k times.

Example 1:
Input: grid = [[1,2,3],[4,5,6],[7,8,9]], k = 1
Output: [[9,1,2],[3,4,5],[6,7,8]]
*/

var shiftGrid = function (grid, k) {
  let arr = [];
  let m = grid[0].length;
  let n = grid.length;
  for (let i = 0; i < grid.length; i++) {
    arr.push(...grid[i]);
  }
  k = k % arr.length;
  while (k--) {
    arr.unshift(arr[arr.length - 1]);
    arr.splice(arr.length - 1, 1);
  }
  let newArr = [],
    i = 0;
  (k = 0), (j = 0), (z = 0);
  while (i < n) {
    newArr.push([]);
    i++;
  }
  i = 0;
  while (i < Math.floor(arr.length / m)) {
    newArr[i][j] = arr[z];

    if (j < m - 1) {
      j++;
    } else {
      j = 0;
      i++;
    }
    z++;
  }
  console.log(newArr);
};
// shiftGrid([[1], [2], [3], [4], [7], [6], [5]], 23);
shiftGrid(
  [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ],
  3
);
