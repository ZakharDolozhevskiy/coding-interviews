// Non-overlapping Intervals
// Given a collection of intervals, find the minimum number of intervals you need to remove to make
// the rest of the intervals non-overlapping.
//
// Note:
// You may assume the interval's end point is always bigger than its start point.
// Intervals like [1,2] and [2,3] have borders "touching" but they don't overlap each other.

// Input: [ [1,2], [2,3], [3,4], [1,3] ] Output: 1
// Input: [ [1,2], [1,2], [1,2] ] Output: 2
// Input: [ [1,2], [2,3] ] Output: 0

const eraseOverlapIntervals = (intervals) => {
  let count = 0;

  intervals.sort((a, b) => a.end - b.end);

  for (let i = 0; i < intervals.length - 1; i++) {
    if (intervals[i].end > intervals[i + 1].start) {
      intervals.splice(i + 1, 1);
      count++;
      i--;
    }
  }

  return count;
};