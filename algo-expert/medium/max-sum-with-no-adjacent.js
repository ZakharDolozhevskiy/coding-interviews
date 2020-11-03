// https://leetcode.com/problems/house-robber/submissions/
// https://www.geeksforgeeks.org/maximum-sum-such-that-no-two-elements-are-adjacent/

// [1,2,3,1] => 4 or [5, 5, 10, 100, 10, 5] => 110

var rob = function(nums) {
  var a = 0
  var b = 0
  var t = null

  for (var i = 0; i < nums.length; i++) {
    t = b
    b = Math.max(a + nums[i], b)
    a = t
  }

  return Math.max(a, b)
}