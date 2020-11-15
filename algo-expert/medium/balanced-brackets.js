/**
 * https://leetcode.com/problems/valid-parentheses/
 *
 * @param {string} s
 * @return {boolean}
 */

var mapper = { ')': '(', '}': '{', ']': '[' }

var isOpenBracket = (s) => ['(', '{', '['].includes(s)

var isValid = function(s) {
    var stack = []

    for (var i = 0; i < s.length; i++) {
        var bracket = s[i]

        if (isOpenBracket(bracket)) {
            stack.push(bracket)
        } else if (stack[stack.length - 1] === mapper[bracket]) {
            stack.pop()
        } else {
            return false
        }
    }

    return !stack.length
};