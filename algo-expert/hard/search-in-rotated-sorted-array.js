// Search in Rotated Sorted Array
// https://leetcode.com/problems/search-in-rotated-sorted-array/

const search = (nums, target) => {
    let s = 0, m = 0, e = nums.length - 1

    while (s <= e) {
        m = (s + e) / 2 ^ 0

        if (nums[m] === target) {
            return m
        }

        if (nums[s] <= nums[m]) {
            if (target >= nums[s] && target <= nums[m]) e = m - 1
            else s = m + 1
        } else {
            if (target >= nums[m] && target <= nums[e]) s = m + 1
            else e = m - 1
        }
    }

    return -1
}