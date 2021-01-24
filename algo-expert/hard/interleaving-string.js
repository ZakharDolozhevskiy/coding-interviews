// Interleaving String
// https://leetcode.com/problems/interleaving-string/solution/

const isInterleave = (s1, s2, s3) => {
    const memo = {}
    return backtracking(s1, 0, s2, 0, s3, 0, memo)
}

const backtracking = (s1, p1, s2, p2, s3, p3, memo) => {
    if (s1.length === p1) {
        return s2.slice(p2) === s3.slice(p3)
    }

    if (s2.length === p2) {
        return s1.slice(p1) === s3.slice(p3)
    }

    if (memo[p1] && memo[p1][p2] !== undefined) {
        return memo[p1][p2]
    }

    let ans = false

    ans = (
        s1[p1] === s3[p3] && backtracking(s1, p1 + 1, s2, p2, s3, p3 + 1, memo) ||
        s2[p2] === s3[p3] && backtracking(s1, p1, s2, p2 + 1, s3, p3 + 1, memo)
    )

    memo[p1] = memo[p1] || {}
    memo[p1][p2] = ans

    return ans
}