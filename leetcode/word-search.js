// https://leetcode.com/problems/word-search/submissions/
// Word Search

var exist = function(board, word) {
    for (let x = 0; x < board.length; x++) {
        for (let y = 0; y < board[x].length; y++) {
            if (board[x][y] === word[0] && backtrack(board, word, x, y)) {
                return true
            }
        }
    }

    return false
};

var backtrack = function(board, word, x, y, visited = {}, pos = 0) {
    if (!board[x] || !board[x][y] || visited[`${x}-${y}`] || board[x][y] !== word[pos]) {
        return false
    }

    if (word.length - 1 === pos) {
        return true
    }

    visited[`${x}-${y}`] = true

    let ans = (
        backtrack(board, word, x + 1, y, visited, pos + 1) ||
        backtrack(board, word, x, y - 1, visited, pos + 1) ||
        backtrack(board, word, x - 1, y, visited, pos + 1) ||
        backtrack(board, word, x, y + 1, visited, pos + 1)
    )

    visited[`${x}-${y}`] = false

    return ans
}