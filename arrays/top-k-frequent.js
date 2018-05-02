// Given a non-empty array of integers, return the k most frequent elements.
//
// For example,
// Given [1,1,1,2,2,3] and k = 2, return [1,2].
//
// Note:
// You may assume k is always valid, 1 ≤ k ≤ number of unique elements.
// Your algorithm's time complexity must be better than O(n log n), where n is the array's size.
//
const topKFrequent = (nums, k) => {
  const map = {};
  const keys = [];
  const counts = [];

  let i = 0, nextKey, nextCount;

  for (let num of nums)
    map[num] = map[num] ? map[num] + 1 : 1;

  while (i++ < k) counts.push(0);

  for (let key in map) {
    for (let i = 0; i < k; i++) {
      if (counts[i] < map[key]) {
        nextKey = keys[i];
        nextCount = counts[i];

        counts[i] = map[key];
        keys[i] = +key;

        key = nextKey;
        map[key] = nextCount;
      }
    }
  }

  return keys
};
