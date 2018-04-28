// Reverse Bits
//
// Input: 43261596
// Output: 964176192
// Explanation: 43261596 represented in binary as 00000010100101000001111010011100,
// return 964176192 represented in binary as 00111001011110000010100101000000.

let reverseBits = function(n) {
  let reversed = 0;

  for (let i = 0; i < 32; i++) {
    reversed <<= 1;
    reversed |= n & 1;
    n >>= 1;
  }

  return reversed >>> 0;
};