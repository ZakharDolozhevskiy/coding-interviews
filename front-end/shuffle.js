// shuffle
// https://bigfrontend.dev/problem/can-you-shuffle-an-array

function shuffle(arr) {
  for (let i = 0, j = 0; i < arr.length; i++) {
    j = i + Math.floor(Math.random() * (arr.length - i));
    [arr[i], arr[j]] = [arr[j], arr[i]]
  }
}

// Fisher-Yates Shuffle (from the end of array)
function shuffle(arr) {
    for (let i = arr.length - 1, j; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]]
    }
}