/**
 * Write a function that takes in two non-empty arrays of integers.
 * The function should nd the pair of numbers (one from the rst array,
 * one from the second array) whose absolute difference is closest to zero.
 * The function should return an array containing these two numbers, with the
 * number from the rst array in the rst position. Assume that there will only be one pair of numbers with the smallest difference.
 *
 * Sample input: [-1, 5, 10, 20, 28, 3], [26, 134, 135, 15, 17] Sample output: [28, 26]
 */

const solution = (A, B) => {
  A.sort((x, y) => x - y)
  B.sort((x, y) => x - y)

  let pointerA = 0
  let pointerB = 0

  let min = [A[pointerA], B[pointerB]]
  let diff = Math.abs(A[pointerA] - B[pointerB])

  while (pointerA < A.length && pointerB < B.length) {
    const candidateDiff = Math.abs(A[pointerA] - B[pointerB])

    if (candidateDiff < diff) {
      min[0] = A[pointerA]
      min[1] = B[pointerB]
    }

    A[pointerA] < B[pointerB] ? pointerA++ : pointerB++
  }

  return min
}