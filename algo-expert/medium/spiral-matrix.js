/**
 * @param {number[][]} matrix
 * @return {number[]}
 *
 * https://leetcode.com/problems/spiral-matrix/submissions/ ( Approach 2: Layer-by-Layer )
 *
 * [1,1,1,1,1]
 * [1,2,2,2,1]
 * [1,2,2,2,1]
 * [1,1,1,1,1]
 *
 */
var spiralOrder = function(matrix) {
    if (matrix.length === 0) {
        return []
    }

    let x1 = 0
    let y1 = 0

    let x2 = matrix[0].length - 1
    let y2 = matrix.length - 1

    let result = []

    while (x1 <= x2 && y1 <= y2) {
        for (let i = x1; i <= x2; i++) result.push(matrix[y1][i])
        for (let j = y1 + 1; j <= y2; j++) result.push(matrix[j][x2])

        if (x1 < x2 && y1 < y2) {
            for (let k = x2 - 1; k > x1; k--) result.push(matrix[y2][k])
            for (let l = y2; l > y1; l--) result.push(matrix[l][x1])
        }

        x1++
        x2--
        y1++
        y2--
    }

    return result
};
