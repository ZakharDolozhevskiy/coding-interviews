// Given a collection of intervals, merge all overlapping intervals.
//
// For example, Given [1,3],[2,6],[8,10],[15,18], return [1,6],[8,10],[15,18].

const insert = (intervals) => {
  intervals.sort((a, b) => a.start - b.start);

  for (let i = 0; i < intervals.length - 1; i++) {
    if (intervals[i].end >= intervals[i + 1].end || intervals[i].end >= intervals[i + 1].start) {
      intervals[i].end = Math.max(intervals[i + 1].end, intervals[i].end);
      intervals.splice(i + 1, 1);
      i--;
    }
  }

  return intervals;
};
