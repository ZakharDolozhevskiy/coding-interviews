// Product of Array Except Self
// https://leetcode.com/problems/product-of-array-except-self/

const productExceptSelf = (nums) => {
    let result = new Array(nums.length)
    result[0] = 1

    for (let i = 1; i < nums.length; i++) {
        result[i] = result[i - 1] * nums[i - 1]
    }

    // Ensure O(n) space complexity by storing power in variable instead of array
    let rightToLeft = 1

    for (let j = nums.length - 2; j >= 0; j--) {
        rightToLeft *= nums[j + 1]
        result[j] *= rightToLeft
    }

    return result
}