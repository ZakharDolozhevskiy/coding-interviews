// Jump Game
// https://leetcode.com/problems/jump-game/

// Start with backtracking, then top-to-bottom with memo and then convert recursion to bottom-to-top approach

// O(n), O(1)
var canJump = function(nums) {
    var target = nums.length - 1

    for (var i = nums.length - 2; i >= 0; i--) {
        if (i + nums[i] >= target) {
            target = i
        }
    }

    return target === 0
};