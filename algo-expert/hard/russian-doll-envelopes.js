// Russian Doll Envelopes ( Disk stack )
// https://leetcode.com/problems/russian-doll-envelopes/submissions/

// Reference: https://leetcode.com/problems/longest-increasing-subsequence

var maxEnvelopes = function(envelopes) {
    if (envelopes.length === 0) { return 0 }

    // Ascend on width and descend on height if width are same.
    envelopes.sort((a, b) => a[0] === b[0] ? b[1] - a[1] : a[0] - b[0])

    let dp = new Array(envelopes.length).fill(1)
    let ans = 1

    for (let i = 1; i < envelopes.length; i++) {
        for (let j = 0; j < i; j++) {
            if (envelopes[i][1] > envelopes[j][1]) {
                dp[i] = Math.max(dp[i], dp[j] + 1)
            }
            ans = Math.max(dp[i], ans)
        }
    }

    return ans
};