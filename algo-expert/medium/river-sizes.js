/**
 *
 * Given an m x n 2d grid map of '1's (land) and '0's (water), return the number of islands.
 * An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.
 *
 * https://leetcode.com/problems/number-of-islands/
 *
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    var result = []
    var visited = {}

    for (var i = 0; i < grid.length; i++) {
        for (var j = 0; j < grid[i].length; j++) {
            var acc = traversal(grid, visited, i, j)
            acc >= 1 && result.push(acc)
        }
    }

    return result
};

var traversal = (grid, visited, i, j) => {
    visited[i] = visited[i] || {}

    if (visited[i][j] || grid[i][j] === '0') {
        return 0
    }

    visited[i][j] = true

    let count = 1

    if (grid[i][j + 1]) { count += traversal(grid, visited, i, j + 1) }
    if (grid[i + 1] && grid[i + 1][j]) { count += traversal(grid, visited, i + 1, j) }
    if (grid[i][j - 1]) { count += traversal(grid, visited, i, j - 1) }
    if (grid[i - 1] && grid[i - 1][j]) { count += traversal(grid, visited, i - 1, j) }

    return count
}