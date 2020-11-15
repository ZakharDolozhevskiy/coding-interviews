/**
 * @param {string[]} strs
 * @return {string[][]}
 *
 * O(n * m)
 *
 * https://leetcode.com/problems/group-anagrams/solution/
 *
 */
var groupAnagrams = function(strs) {
    var groups = {}

    for (var i = 0; i < strs.length; i++) {
        var key = toKey(strs[i])
        groups[key] = groups[key] || []
        groups[key].push(strs[i])
    }

    return Object.entries(groups).map(([_, items]) => items)
};

// O(m)
var toKey = function(s) {
    var hash = {}, key = ''

    for (var j = 0; j < s.length; j++) {
        hash[s[j]] = hash[s[j]] ? hash[s[j]] + 1 : 1;
    }

    for (var k = 97; k <= 122; k++) {
        key += '-' + hash[String.fromCharCode(k)] || 0
    }

    return key
}