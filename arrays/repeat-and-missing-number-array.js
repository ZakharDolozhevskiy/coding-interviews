// You are given a read only array of n integers from 1 to n.
//
// Each integer appears exactly once except A which appears twice and B which is missing.
//
// Return A and B. [3 1 2 5 3] => [3, 4]
//
// Note: Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?
// Note that in your output A should precede B.

const repeatedNumber = array => {
	let missed, repeated, i;

	array.sort((a,b) => a - b);
	missed = array[0] !== 1 ? 1 : sorted[sorted.length - 1] + 1;
	
	for(i = 1; i < sorted.length; i++) {
		if (sorted[i - 1] === sorted[i]) repeated = sorted[i];
		if (sorted[i] - sorted[i - 1] > 1) missed = sorted[i] - 1;
	}
	
	return [repeated, missed];
};