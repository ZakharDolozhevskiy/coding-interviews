/**
 * Min Number Of Coins For Change ( algoexpert )
 *
 * https://leetcode.com/problems/coin-change/
 *
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    var dp = new Array(amount + 1).fill(Infinity)
    dp[0] = 0


    for (var i = 1; i <= amount; i++) {
        for (var c = 0; c < coins.length; c++) {
            if (coins[c] <= i) {
                dp[i] = Math.min(dp[i], dp[i - coins[c]] + 1)
            }
        }
    }

    return isFinite(dp[amount]) ? dp[amount] : -1
};