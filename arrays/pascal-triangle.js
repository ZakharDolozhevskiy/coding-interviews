// Given numRows, generate the first numRows of Pascal’s triangle.
//
// Pascal’s triangle: To generate A[C] in row R, sum up A’[C] and A’[C-1] from previous row R - 1.
//
// Example: Given numRows = 5
//
// [1],
// [1,1],
// [1,2,1],
// [1,3,3,1],
// [1,4,6,4,1]

const generateTriangle = depth => {
	if (!depth) return [];

	let triangle = [[1]];
	let prevRow = triangle[0];
	let nextRow;
	
	while (triangle.length < depth) {
		nextRow = [1];
		
		prevRow.forEach((num, i, arr) =>
			arr[i] && arr[i + 1] && nextRow.push(arr[i] + arr[i + 1]));
		
		nextRow.push(1);
		triangle.push(nextRow);
		prevRow = nextRow;
	}
	
	return triangle;
};
