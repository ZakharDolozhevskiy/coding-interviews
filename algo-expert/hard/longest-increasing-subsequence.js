// Longest Increasing Subsequence
// https://leetcode.com/problems/longest-increasing-subsequence/

// DP O(n2) / O(n)
const dp = nums => {
    let dp = []
    let res = 0

    dp[0] = 1

    for (let i = 1; i < nums.length; i++) {
        let aux = 0
        for (let j = 0; j < i; j++) {
            if (nums[j] < nums[i]) {
                aux = Math.max(aux, nums[j])
            }
        }
        dp[i] = aux + 1
        res = Math.max(res, dp[i])
    }

    return res
}

const recursion = (nums) => {
    const memo = {}
    return recursionHelper(nums, -1, 0, memo)
}

const recursionHelper = (nums, prev, pos, memo) => {
    if (pos === nums.length) {
        return 0
    }

    if (memo[prev] && memo[prev][pos]) {
        return memo[prev][pos]
    }

    let branchA = 0
    let branchB = 0

    if (prev < 0 || nums[pos] > nums[prev]) {
        branchA = recursionHelper(nums, pos, pos + 1, memo)
    }

    branchB = recursionHelper(nums, prev, pos + 1, memo)

    memo[prev] = memo[prev] || {}
    memo[prev][pos] = Math.max(branchA, branchB)

    return memo[prev][pos]
}