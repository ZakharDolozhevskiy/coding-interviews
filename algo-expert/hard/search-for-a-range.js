// Find First and Last Position of Element in Sorted Array
// https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/

const searchRange = (nums, target, start = 0, end = nums.length - 1) => {
    if (start === end && nums[start] !== target) {
        return [-1, -1]
    }

    if (start === end && nums[start] === target) {
        while (nums[end + 1] === target) end++;
        return [start, end];
    }

    const mid = (start + end) / 2 ^ 0;

    return nums[mid] < target
        ? searchRange(nums, target, mid + 1, end)
        : searchRange(nums, target, start, mid)
}