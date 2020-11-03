/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 *
 * Number Of Change ( algoexpert )
 *
 * https://leetcode.com/problems/coin-change-2/
 */

var change = function(amount, coins) {
    var dp = new Array(amount + 1).fill(0)
    dp[0] = 1
    // iterate coins on top to prevent duplication
    for (var i = 0; i < coins.length; i++) {
        for (var j = 1; j <= amount; j++) {
            if (coins[i] <= j) {
                dp[j] = dp[j] + dp[j - coins[i]]
            }
        }
    }

    return dp[amount]
};