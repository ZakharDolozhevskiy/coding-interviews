// Given a number N, verify if N is prime or not.
// Input : 7 Output : True
// Return 1 if N is prime, else return 0.

// Hint: https://www.youtube.com/watch?v=7VPA-HjjUmU

const verifyPrime = N => {
	if (N === 1) return false;
	
	for (let i = 2; i < Math.sqrt(N); i++) {
		if (N % i === 0) return false;
	}

	return true
};