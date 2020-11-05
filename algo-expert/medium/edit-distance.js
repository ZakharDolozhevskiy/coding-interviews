/**
 * https://leetcode.com/problems/edit-distance/discuss/159295/Python-solutions-and-intuition
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 * O(m*n)time and memory
 */
var minDistance = function(word1, word2) {
    var cache = {}

    if (word1.length || word2.length) {
        return helper(word1, word2, 0, 0, cache)
    } else {
        return 0
    }
};

var helper = function(w1, w2, i, j, cache) {
    var key = `${i}-${j}`

    if (w1.length === i) {
        return w2.length - j
    }

    if (w2.length === j) {
        return w1.length - i
    }

    if (!cache[key]) {
        if (w1[i] === w2[j]) {
           cache[key] = helper(w1, w2, i + 1, j + 1, cache)
        } else {
           var insert = 1 + helper(w1, w2, i, j + 1, cache)
           var remove = 1 + helper(w1, w2, i + 1, j, cache)
           var replace = 1 + helper(w1, w2, i + 1, j + 1, cache)
           cache[key] = Math.min(insert, remove, replace)
        }
    }

    return cache[key]
};

// DP solution

var minDistance = function(word1, word2) {
    var dp = []
    var i, j

    for (i = 0; i <= word1.length; i++) {
        dp[i] = [i]
    }

    for (j = 1; j <= word2.length; j++) {
        dp[0].push(j)
    }

    for (i = 1; i < word1.length + 1; i++) {
        for (j = 1; j < word2.length + 1; j++) {
            if (word1[i - 1] === word2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1]
            } else {
                dp[i][j] = 1 + Math.min(
                    dp[i - 1][j], // Insert
                    dp[i][j - 1], // Remove
                    dp[i - 1][j - 1] // Replace
                )
            }
        }
    }

    return dp[dp.length - 1].pop()
};