// Kth Largest Element in an Array
// https://leetcode.com/problems/kth-largest-element-in-an-array/

const findKthLargest = (nums, k) => {
    let start = 0, end = nums.length - 1;
    // position of k if nums is a sorted array
    let pos = nums.length - k;
    // position of next element of partitioned array
    let idx = 0

    while (start < end) {
        idx = partition(nums, start, end)
        // element what we're looking for is on correct spot
        if (pos === idx) {
            return nums[pos]
        } else if (idx < pos) {
            start = idx + 1
        } else {
            end = idx - 1
        }
    }

    return nums[pos]
}

const partition = (nums, start, end) => {
    // Pick element on end position as a pivot
    let pivot = nums[end], swapIdx = start
    // Move elements then less then pivot to the left
    for (let i = start; i < end; i++) {
        if (nums[i] < pivot) {
            [nums[swapIdx], nums[i]] = [nums[i], nums[swapIdx]]
            swapIdx++
        }
    }
    // swap pivot with last item ( now all items to the left is less then pivot)
    [nums[swapIdx], nums[pivot]] = [nums[pivot], nums[swapIdx]]

    return swapIdx
}