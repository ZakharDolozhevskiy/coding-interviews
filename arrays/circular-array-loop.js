// Circular Array Loop
// https://leetcode.com/problems/circular-array-loop/

// Explanation: https://leetcode.com/problems/circular-array-loop/discuss/637800/Javascript-Solution-Easy-to-understand-with-comments

const circularArrayLoop = function(nums) {
    if (nums.length <= 1) return false

    let pointerA, pointerB, isForward

    for (let i = 0; i < nums.length; i++) {
        pointerA = pointerB = i
        isForward = nums[i] > 0

        while (true) {
            pointerA = nextIndex(nums, pointerA, isForward)
            if (pointerA === -1) break

            pointerB = nextIndex(nums, pointerB, isForward)
            if (pointerB === -1) break

            pointerB = nextIndex(nums, pointerB, isForward)
            if (pointerB === -1) break

            if (pointerA === pointerB) {
                return true
            }
        }
    }

    return false
}

const nextIndex = function(nums, index, isForward) {
    // Cycle has one direction
    if (nums[index] > 0 !== isForward) return -1
    // Next position calculation
    let next = (index + nums[i]) % nums.length
    next = next < 0 ? nums.length + next : next
    // Don't count cycle with one element
    if (next === index) return -1
    else return next
}