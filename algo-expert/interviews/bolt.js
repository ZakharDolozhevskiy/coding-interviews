const _ = require('lodash');

/*

Write a function checking that the given string is valid. We consider a string to be valid` if all the characters of the string have exactly the same frequency.`

Examples:
"aabbcc" is a valid string
"aabbccc" is an invalid string

*/


// time O(n) space O(n)
const isValid = (input) => {
  const hash = {}

  for (let i = 0; i < input.length; i++) {
     hash[input[i]] = hash[input[i]] || 0
     hash[input[i]] += 1
  }


  let latestKey = null
  let uniqCount = 0

  let keyA = null
  let keyB = null

  let hash2 = {}

  for (let key in hash) {
    hash2[hash[key]] = key
  }

  let frequencies = Object.values(hash2)


  if (frequencies.length > 2) return false

  // frequencies = [3, 1]

  if (frequencies.length === 1 || Math.abs(frequencies[0] - frequencies[1]) - 1 === 0) {
    return true
  }

  return false


  // aaaabbbbccccdddddeeeee

  // 1 hash { 2: 3, 5: 1 }
  // count = 2

  // 2
  // 5 - 1 === 3 => true : false


  // [2, 5, 2, 2]
  // 5
  // -1
  // 4 != 2

  // [4, 4, 5, 5, 6, 6]


//   const numbers = Object.entries(hash)
//   numbers.sort((a, b) => a - b)
//   // [1, 2, 2, 3]

//   let pointerA = 0
//   let pointerB = numbers.length - 1

//   let removalCount = 1

//   while (pointerA < pointerB) {

//   }

//   if (numbers[pointerA] !== numbers[pointerB] &&
//       Math.abs(numbers[pointerA] - numbers[pointerB]) - 1 > 0
//   ) {
//     return false
//   }

//   return true

//   let latestCount = null
//   let removalCount = 1

//   for (let key in hash) {
//     if (latestCount != null && latestCount !== hash[key]) {
//         if (latestCount === hash[key] - removalCount) {
//           removalCount--
//           continue
//         }
//         return false;
//     }
//     latestCount = hash[key]
//   }

//   return true
}


//  A           B
// [1, 1, 1, 2, 2]

//     A     B
// [1, 1, 1, 2, 2]


console.log(isValid('aabbcc')) === 'true'
console.log(isValid('daabbccc')) === 'false'
console.log(isValid('11bb##')) === 'true'
console.log(isValid('11b!^&b##')) === 'false'
console.log(isValid('112233#')) === 'true'

