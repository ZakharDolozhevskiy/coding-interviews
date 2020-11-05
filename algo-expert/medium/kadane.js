/**
 * @param {number[]} nums
 * @return {number}
 * https://medium.com/@rsinghal757/kadanes-algorithm-dynamic-programming-how-and-why-does-it-work-3fd8849ed73d
 */

var maxSubArray = function(nums) {
    var sum = 0
    var max = nums[0]

    for (var i = 0; i < nums.length; i++) {
        sum = Math.max(sum + nums[i], nums[i])
        max = Math.max(sum, max)
    }

    return max
};