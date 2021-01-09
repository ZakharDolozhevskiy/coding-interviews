// Word Search II
// https://leetcode.com/problems/word-search-ii

var findWords = function(board, words) {
    var trie = buildTrie(words)

    return words.filter((word) => {
        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board[i].length; j++) {
                if (board[i][j] === word[0] && backtracking(board, word, trie, i, j)) {
                    return true
                }
            }
        }
    })
};

var backtracking = function(board, word, trie, x, y, visited = {}) {
    if (trie.word === word) {
        return true
    }

    if (!board[x] || !board[x][y] || visited[`${x}+${y}`] || !trie[board[x][y]]) {
        return false
    }

    visited[`${x}+${y}`] = true

    let ans = (
        backtracking(board, word, trie[board[x][y]], x - 1, y, visited) ||
        backtracking(board, word, trie[board[x][y]], x, y + 1, visited) ||
        backtracking(board, word, trie[board[x][y]], x + 1, y, visited) ||
        backtracking(board, word, trie[board[x][y]], x, y - 1, visited)
    )

    visited[`${x}+${y}`] = false

    return ans
};

var buildTrie = function(words) {
    var root = {}

    words.forEach(word => {
        let node = root

        for (let char of word) {
            node[char] = node[char] || {}
            node = node[char]
        }

        node.word = word
    })

    return root
}


// SOLUTION 2
var findWords = function(board, words) {
    var trie = buildTrie(words)

    var result = []

    var helper = (node, x, y, visited = {}) => {
        if (node.word) {
            result.push(node.word)
            node.word = null
        }

        if (!board[x] || !board[x][y] || visited[`${x}+${y}`] || !node[board[x][y]]) {
            return
        }

        visited[`${x}+${y}`] = true

        helper(node[board[x][y]], x - 1, y, visited) ||
        helper(node[board[x][y]], x, y + 1, visited) ||
        helper(node[board[x][y]], x + 1, y, visited) ||
        helper(node[board[x][y]], x, y - 1, visited)

        visited[`${x}+${y}`] = false
    }

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            helper(trie, i, j)
        }
    }

    return result
};