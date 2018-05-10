// A binary watch has 4 LEDs on the top which represent the hours (0-11), and the 6 LEDs
// on the bottom represent the minutes (0-59).
//
// Each LED represents a zero or one, with the least significant bit on the right.
//
// Example:
// Input: n = 1
// Return: ["1:00", "2:00", "4:00", "8:00", "0:01", "0:02", "0:04", "0:08", "0:16", "0:32"]
//
// Note:
// The order of output does not matter.
// The hour must not contain a leading zero, for example "01:00" is not valid, it should be "1:00".
// The minute must be consist of two digits and may contain a leading zero, for example "10:2" is
// not valid, it should be "10:02".

const readBinaryWatch = function(num) {
  const hrs = [8, 4, 2, 1];
  const mins = [32, 16, 8, 4, 2, 1];
  const result = [];

  backtracking(result, hrs, mins, num);
  
  return result;
};

const backtracking = function(result, hrs, mins, num, aux = [0,0], idx = 0) {
  if (num === 0) {
    result.push(`${aux[0]}:${aux[1] < 10 ? 0 : ''}${aux[1]}`);
  } else {
    for (let i = idx; i < hrs.length + mins.length; i++) {
      if (i < hrs.length) {
        aux[0] += hrs[i];
        aux[0] < 12 && backtracking(result, hrs, mins, num - 1, aux, i + 1);
        aux[0] -= hrs[i];
      } else {
        aux[1] += mins[i - hrs.length];
        aux[1] < 60 && backtracking(result, hrs, mins, num - 1, aux, i + 1);
        aux[1] -= mins[i - hrs.length];
      }
    }
  }
};

console.log(readBinaryWatch(2));