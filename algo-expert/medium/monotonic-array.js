/**
 *
 * https://leetcode.com/problems/monotonic-array/submissions/
 *
 * @param {number[]} A
 * @return {boolean}
 */
var isMonotonic = function(A) {
    let isDecreasing = true
    let isIncreasing = true

    for (let i = 0; i < A.length - 1; i++) {
        if (A[i] === A[i + 1]) {
            continue
        }

        if (A[i] < A[i + 1]) {
            isDecreasing = false
        } else {
            isIncreasing = false
        }
    }

    return isIncreasing || isDecreasing
};