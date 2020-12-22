// A number sequence
// https://bigfrontend.dev/problem/A-number-sequence

function getNthNum(n) {
  let ans = '1'

  while (n-- > 1) {
    ans = count(ans)
  }

  return ans
}

function count(str) {
  let res = ''
  let count = 0
  let char = str[0]

  for (let i = 0; i <= str.length; i++) {
    if (char === str[i]) {
      count++
    } else {
      res = `${res}${count}${char}`
      char = str[i]
      count = 1
    }
  }

  return res
}