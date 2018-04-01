// Given an even number ( greater than 2 ), return two prime numbers whose sum will be equal to given number.
//
// NOTE A solution will always exist. read Goldbach’s conjecture

const verifyPrime = require('./verify-prime');

const primeSum = N => {
  for (let i = 2; i <= N - 2; i++) {
    if (verifyPrime(i) && verifyPrime(N - i))
      return [i, N - i];
  }
};
