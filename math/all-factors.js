// Given a number N, find all factors of N.
// N = 6
// factors = {1, 2, 3, 6}
// Make sure the returned array is sorted.

// Hint: https://www.youtube.com/watch?v=dolcMgiJ7I0

const allFactors = N => {
	let factorA = 1;
	let factorB = null;
	let factorsA = [];
	let factorsB = [];
	
	while (factorA <= Math.sqrt(N)) {
		if (N % factorA === 0) {
			factorB = N / factorA;

			factorsA.push(factorA);
			(factorB !== factorA) && factorsB.unshift(factorB);
		}

		factorA++;
	}
	
	return factorsA.concat(factorsB);
};
