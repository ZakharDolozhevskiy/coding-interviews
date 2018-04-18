// Print concentric rectangular pattern in a 2d matrix.
// Let us show you some examples to clarify what we mean.

const prettyPrint = n => {
  let result = [];
  let size = (n - 1) * 2;
  let mid = size / 2;
  let i = 0, j;

  while (i++ <= size) result.push([]);

  for (i = 0; i <= mid; i++) {

    if (mid === i) {
      while (mid--) {
        result[i][mid] = n - mid;
        result[i][size - mid] = n - mid;
      }
      result[i][i] = 1;
      continue;
    }

    for (j = i; j <= size - i; j++) {
      result[i].push(n - i);
      result[size - i].push(n - i);
    }

    for (j = (size + 1 - (result[i].length)) / 2; j > 0; j--) {
      result[i].push(n - (j - 1));
      result[i].unshift(n - (j - 1));
      result[size - i].push(n - (j - 1));
      result[size - i].unshift(n - (j - 1));
    }

  }

  return result;
};
