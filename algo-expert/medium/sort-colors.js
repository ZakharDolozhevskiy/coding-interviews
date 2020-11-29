// Sort Colors
// https://leetcode.com/problems/sort-colors/

// Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

// Here, we will use the integers 0, 1, and 2 to represent the color red, white, and blue respectively.

// Follow up:

// Could you solve this problem without using the library's sort function?
// Could you come up with a one-pass algorithm using only O(1) constant space?

const sortColor = (nums) => {
    let left = 0
    let right = nums.length - 1

    let index = 0

    while(left <= right && index <= right) {
        if (nums[index] === 0) {
            [nums[index], nums[left]] = [nums[left], nums[index]]
            left++
            index++
        } else if (nums[i] === 2) {
            [nums[index], nums[right]] = [nums[right], nums[index]]
            right--
        } else {
            index++
        }
    }

    return nums
}