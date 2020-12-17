// Decode message
// https://bigfrontend.dev/problem/decode-message

function decode(message) {
  let result = ''

  if (!message.length || !message[0].length) {
    return result
  }

  let i = 0,
      j = 0,
      x = message.length - 1,
      y = message[0].length - 1,
      count = 3

  while (count) {
    while (i < x && j < y) {
      result += message[i][j]
      i = i + 1
      j = j + 1
    }

    while (i > 0 && j < y) {
      result += message[i][j]
      i = i - 1
      j = j + 1
    }

    count--
  }

  result += message[i][j]

  return result
}