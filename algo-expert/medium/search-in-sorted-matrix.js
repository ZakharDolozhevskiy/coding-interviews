/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    if (!matrix.length) {
        return false
    }

    var i = 0, j = matrix[0].length - 1;

    while (i < matrix.length && j >= 0) {
        if (target > matrix[i][j]) {
            i++
            continue
        }

        if (target !== matrix[i][j]) {
            j--
        } else {
            return true
        }
    }

    return false
};