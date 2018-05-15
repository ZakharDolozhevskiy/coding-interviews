// Number of Islands
// Given a 2d grid map of '1's (land) and '0's (water), count the number of islands.
// An island is surrounded by water and is formed by connecting adjacent lands horizontally or
// vertically. You may assume all four edges of the grid are all surrounded by water.
//
// Input:
// 11110
// 11010
// 11000
// 00000
//
// Output: 1

const numIslands = grid => {
  let count = 0;
  let columns = grid.length - 1;

  for (let i = 0; i <= columns; i++)
    for (let j = 0; j <= grid[i].length - 1; j++)
      if (grid[i][j] != 0) {
        dfs(grid, i, j, columns, grid[i].length - 1);
        count++;
      }

  return count;
};

const dfs = (grid, i, j, columns, rows) => {
  if (i < 0 || j < 0 || i > columns || j > rows || grid[i][j] == 0)
    return;

  grid[i][j] = 0;

  dfs(grid, i, j - 1, columns, rows);
  dfs(grid, i - 1, j, columns, rows);
  dfs(grid, i, j + 1, columns, rows);
  dfs(grid, i + 1, j, columns, rows);
};
