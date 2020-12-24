

// Backtracking approach
var _canPartition = function(nums) {
    nums.sort((a, b) => a - b)

    var sum = nums.reduce((acc, num) => acc + num, 0)
    if (sum % 2) return false

    var target = sum / 2

    const backtracking = (current, index) => {
        if (current === target) { return true }
        if (index > nums.length - 1 || current > target) { return false }

        return (
            backtracking(current + nums[index], index + 1) || backtracking(current, index + 1)
        )
    }

    return backtracking(0, 0)
};

// DP + 1/0 Knapsack
// Input: [1,5,11,5]
const canPartition = (nums) => {
    const sum = nums.reduce((sum, num) => sum + num, 0)

    if (sum % 2) return false

    const target = sum / 2

    // matrix by indexes of nums to all possible combinations from 0 to target
    const dp = new Array(nums.length + 1).fill(null)
        .map(() => {
            let arr = new Array(target + 1).fill(false)
            arr[0] = true
            return arr
        })

    for (let i = 1; i < dp.length; i++) {
        for (let j = 0; j <= target; j++) {
            if (j >= nums[i - 1]) {
                dp[i][j] = dp[i][j] || dp[i - 1][j - nums[i - 1]]
            } else {
                dp[i][j] = dp[i - 1][j]
            }
        }
    }

    return dp[nums.length - 1][target]
}