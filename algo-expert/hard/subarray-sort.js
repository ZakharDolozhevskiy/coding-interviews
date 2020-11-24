// https://leetcode.com/problems/shortest-unsorted-continuous-subarray/

// Given an integer array nums, you need to find one continuous subarray
// that if you only sort this subarray in ascending order, then the whole array will be sorted in ascending order.
// Return the shortest such subarray and output its length.
// [2,6,4,8,10,9,15]

// sorting
const findUnsortedSubarray = (nums) => {
    const sorted = nums.slice()
    sorted.sort((a, b) => a - b)

    let left = nums.length
    let right = 0

    for (var i = 0; i < sorted.length; i++) {
        if (sorted[i] !== nums[i]) {
            left = Math.min(left, i)
            right = Math.max(right, i)
        }
    }

    return Math.max(right - left + 1, 0)
}

// stack
const findUnsortedSubarray = (nums) => {
    let stack = []

    let left = Infinity
    let right = -Infinity

    for (let i = 0; i < nums.length; i++) {
        while (nums[stack[stack.length - 1]] > nums[i]) { left = Math.min(left, stack.pop()) }
        stack.push(i)
    }

    stack.length = 0

    for (let i = nums.length - 1; i >= 0; i--) {
        while (nums[stack[stack.length - 1]] < nums[i]) { right = Math.max(right, stack.pop()) }
        stack.push(i)
    }

    return Math.max(right - left + 1, 0)
}

// constant space
const findUnsortedSubarray = (nums) => {
    let left = Infinity
    let right = -Infinity

    let flag = false, i, j

    for (i = 1; i < nums.length; i++) {
        if (nums[i - 1] > nums[i]) {
            flag = true
        }
        if (flag) {
            left = Math.min(left, nums[i])
        }
    }

    for (j = nums.length - 2; j >= 0; j--) {
        if (nums[i + 1] < nums[i]) {
            flag = true
        }
        if (flag) {
            right = Math.max(right, nums[i])
        }
    }

    for (i = 0; i < nums.length; i++) {
        if (nums[i] > left) break
    }

    for (i = nums.length - 1; i >= 0; i--) {
        if (nums[i] < right) break
    }

    return Math.max(right - left + 1, 0)
}