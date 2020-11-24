/**
 *
 * https://leetcode.com/problems/longest-consecutive-sequence/solution/
 */

 const longestConsecutive = function(nums) {
    let hash = new Map

    nums.forEach(num => hash.set(num))

    let max = 0

    nums.forEach(num => {
        let currentNum = num
        let currentCount = 1
        // only start with sequence beginning
        if (!hash.has(num - 1)) {
            while(hash.has(currentNum + 1)) {
                currentCount++
                currentNum++
            }

            max = Math.max(max, currentCount)
        }
    })

    return max
 }