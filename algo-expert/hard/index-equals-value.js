// Index Equals Value
// https://leetcode.com/problems/subarray-sum-equals-k/

const subarraySum = (nums, k) => {
    let total = 0, sum = 0, prevSum = {}

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i]

        if (prevSum[sum - k]) {
            total += prevSum[sum - k]
        }

        prevSum[sum] = prevSum[sum] + 1 || 1
    }

    return total
}