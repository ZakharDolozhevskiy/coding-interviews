/**
 * @param {number[]} A
 * @return {number}
 *
 * https://leetcode.com/problems/longest-mountain-in-array/submissions/
 */
var longestMountain = function(A) {
    var base = 0

    var end = 0
    var ans = 0

    while (base < A.length) {
        end = base

        if (end + 1 < A.length && A[end] < A[end + 1]) {
            while (end + 1 < A.length && A[end] < A[end + 1]) end++

            if (end + 1 < A.length && A[end] > A[end + 1]) {
                while (end + 1 < A.length && A[end] > A[end + 1]) end++
                ans = Math.max(ans, end - base + 1)
            }
        }

        base = Math.max(end, base + 1)
    }

    return ans
};