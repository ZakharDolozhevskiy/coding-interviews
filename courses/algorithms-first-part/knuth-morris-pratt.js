// KMP (Knuth Morris Pratt) Pattern Searching
// https://www.geeksforgeeks.org/searching-for-patterns-set-2-kmp-algorithm/

const genLongestProperSuffixHash = (prefix) => {
  let hash = [], ln = prefix.length, j = 0, i = 1;

  // Строка с одним символом не может иметь префик, ставим 0
  hash[0] = 0;

  while (i < ln) {
    if (prefix[j] === prefix[i]) {
      hash[i] = ++j; i++;
    } else {
      if (j === 0) {
        hash[i] = 0; i++;
      } else {
        j = hash[j - 1];
      }
    }
  }

  return hash;
};

const search = (text, pattern) => {
  let tLength = text.length;
  let pLength = pattern.length;
  let i = 0, j = 0;

  let lps = genLongestProperSuffixHash(pattern);

  while (i < tLength) {
    if (text[i] === pattern[j]) {
      i++; j++;
    }

    if (j === pLength) {
      j = lps[ j - 1 ];
      console.log('Found on: ', i, 'position');
    }

    else if (i < tLength && text[i] !== pattern[j]) {
      j === 0 ? i++ : (j = lps[ j - 1 ]);
    }
  }
};
