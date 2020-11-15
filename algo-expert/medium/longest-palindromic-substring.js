/**
 * @param {string} s
 * @return {string}
 *
 * https://leetcode.com/problems/longest-palindromic-substring/
 */
var longestPalindrome = function(s) {
    var start = 0
    var end = 0

    for (var i = 0; i < s.length; i++) {
        // two cases aba / abba
        var len1 = expand(s, i, i)
        var len2 = expand(s, i, i + 1)

        var max = Math.max(len1, len2)

        if (max > end - start) {
            start = i - ((max - 1) / 2 ^ 0)
            end = i + (max / 2 ^ 0)
        }
    }
    // +1 to add last character
    return s.slice(start, end + 1)
}

var expand = function(s, start, end) {
    while (start >= 0 && s[start] === s[end] && end < s.length) {
        start--;
        end++;
    }
    // -1 fix position: cabad - it ends on start = 0 and end = 4 but palindrome is ln = 3
    return end - start - 1;
}