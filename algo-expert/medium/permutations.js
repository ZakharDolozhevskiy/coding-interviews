/**
 *
 * https://leetcode.com/problems/permutations/
 *
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    var result = []

    helper(nums, result)

    return result
};

var helper = function(src, res, aux = []) {
    for (var i = 0; i < src.length; i++) {
        if (aux.includes(src[i])) {
            continue
        }

        aux.push(src[i])

        if (src.length === aux.length) {
            res.push(aux.slice())
        } else {
            helper(src, res, aux)
        }

        aux.pop()
    }
}