// 0-1 Knapsack Problem | DP-10
// Solution:
// https://leetcode.com/problems/partition-equal-subset-sum/discuss/462699/Whiteboard-Editorial.-All-Approaches-explained.

const value = [3, 2, 4, 4];
const weight = [1, 2, 1, 3];

const items =  4
const target = 4

const knapsack = () => {
    // 1, Create DP table ( capacity + 1 base case )

    // ....... weight .......
    // x      0  1  2  3  4
    // i  - [ 0, 0, 0, 0, 0 ]
    // t  0 [ 0, 0, 0, 0, 0 ]
    // e  1 [ 0, 0, 0, 0, 0 ]
    // m  2 [ 0, 0, 0, 0, 0 ]
    // s  3 [ 0, 0, 0, 0, 0 ]
    // ......................

    const dp = new Array(target + 1).fill(0).map(() => new Array(items + 1).fill(0))

    // i - current bag capacity
    for (var i = 1; i <= target; i++) {
        // j - represent item raw in dp table
        for (var j = 1; j <= items; j++) {
            // item weight grater then current bag capacity
            if (weight[j - 1] > i) {
                // dp[i][j] = Math.max(dp[i][j - 1], dp[i][j])
                dp[i][j] = dp[i][j - 1]
            } else {
                // take max from:
                // a) value from the prev item with same weight
                // or
                // b) current item value and the value of weight rest
                dp[i][j] = Math.max(
                    dp[i][j - 1],
                    dp[i - weight[j - 1]][j - 1] + value[j - 1]
                )
            }
        }
    }

    // value  = [3, 2, 4, 4];
    // weight = [1, 2, 1, 3];

    // ....... weight .......
    // x      0  1  2  3  4
    // i  0 [ 0, 0, 0, 0, 0 ]
    // t  1 [ 0, 3, 3, 3, 0 ]
    // e  2 [ 0, 3, 3, 5, 0 ]
    // m  3 [ 0, 4, 7, 7, 0 ]
    // s  4 [ 0, 4, 7, 7, 0 ]
    // ......................
console.log(dp);
    return dp[target][target]
}

knapsack()