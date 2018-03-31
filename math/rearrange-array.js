// Rearrange a given array so that Arr[i] becomes Arr[Arr[i]] with O(1) extra space.
// Input : [1, 0]
// Return : [0, 1]

const rearrangeArray = array => {
	let size = array.length;

	for (let i = 0; i < size; i++)
		array[i] += (array[ array[i] ] % size) * size;
	
	for (let i = 0; i < size; i++)
		array[i] = (array[i] / size) ^ 0;
	
	return array;
};

// A = B + C * N   if ( B, C < N )
// A % N = B
// A / N = C

// array[i] += (array[ array[i] ] % size) * size;
// array[ array[i] ] % size - читаем оригинальное значение => A % N = B