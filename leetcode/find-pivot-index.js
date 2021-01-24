// Find Pivot Index
// https://leetcode.com/problems/find-pivot-index/submissions/

const pivotIndex = (nums) => {
    let leftSum = 0, totalSum = nums.reduce((sum, num) => sum + num, 0)

    for (let i = 0; i < nums.length; i++) {
        if (leftSum === totalSum - leftSum - nums[i]) return i
        leftSum += nums[i]
    }

    return -1
}