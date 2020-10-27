
/**
 *
 * https://leetcode.com/problems/move-zeroes/
 *
 * Given an array of nums, write a function to move all element's to the end of it
 * while maintaining the relative order of the non-zero elements.
 */
const moveElements1 = (source, element) => {
  for (let i = source.length - 1; i >= 0; i--) {
    source[i] === element && source.push(source.splice(i, 1)[0])
  }
}

var moveElements2 = function(source, element = 0) {
    var index = 0

    for (var i = 0; i < source.length; i++) {
        if (source[i] !== element) {
            source[index] = source[i]
            index++
        }
    }

    while (index < source.length) {
        source[index] = element
        index++
    }
};