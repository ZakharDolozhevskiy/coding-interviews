// The count-and-say sequence is the sequence of integers with the first five terms as following:
// 1.     1
// 2.     11
// 3.     21
// 4.     1211
// 5.     111221
// 1 is read off as "one 1" or 11.
// 11 is read off as "two 1s" or 21.
// 21 is read off as "one 2, then one 1" or 1211.
// Given an integer n, generate the nth term of the count-and-say sequence.
//
// Note: Each term of the sequence of integers will be represented as a string.

const countAndSay = n => {
  let prev = '1', next = '', count = 0;

  while (--n > 0) {
    for (let i = 0; i < prev.length; i++) {
      if (!prev[i + 1] || prev[i + 1] !== prev[i]) {
        next += count + 1 + prev[i];
        count = 0;
      } else {
        count++;
      }
    }

    prev = next;
    count = 0;
    next = '';
  }

  return prev;
};
