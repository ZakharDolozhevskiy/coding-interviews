// Given a number N, find all prime numbers upto N ( N included ).
// Make sure the returned array is sorted.
//
// Example: if N = 7, all primes till 7 = {2, 3, 5, 7}

const primeNumbers = N => {
  let nums = [false, false];
  let result = [];
  let i, j;

  for (i = 2; i < N; i++) nums.push(true);

  for (i = 2; i <= Math.sqrt(N); i++) {
    if (nums[i]) {
      for (j = i; i * j <= N; j++) nums[i * j] = false;
      result.push(i);
    }
  }

  for (i; i <= N; i++) nums[i] && result.push(i);

  return result;
};

console.log(primeNumbers(3));