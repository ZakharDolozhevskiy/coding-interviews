
function hammingDistance(input) {
  let sum = 0, count;

  // итерация по каждому биту
  // 2 -> 10 | i=0 -> 0 i=1 -> 1
  for (let i = 0; i < 32; i++) {
    count = 0;
    for (let j = 0; j < input.length; j++) {
      // 1 << i - получаем бит с конца i - сдвиг
      // 2 -> 10, 10 & 01 при i = 0 ставит последний бит в 1
      if (input[j] & 1 << i)
        count++;
    }
    sum += count * (input.length - count) * 2;
  }

  return sum;
}

console.log(hammingDistance([ 96, 96, 7, 81, 2, 13 ]));