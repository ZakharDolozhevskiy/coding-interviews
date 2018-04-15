// You are given two positive numbers A and B. You need to find the maximum valued integer X such that:
//
// X divides A i.e. A % X = 0
// X and B are co-prime i.e. gcd(X, B) = 1
// For example, A = 30 B = 12 We return X = 5

const gcd = (a, b) =>
  !b ? a : gcd(b, a % b);

const cpFact = (a, b) =>
  gcd(a, b) === 1 ? a : cpFact(a / gcd(a, b), b);

