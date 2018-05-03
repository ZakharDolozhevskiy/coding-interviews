// A peak element is an element that is greater than its neighbors.
// Given an input array nums, where num[i] ≠ num[i+1], find a peak element and return its index.
// The array may contain multiple peaks, in that case return the index to any one of the peaks is fine.
// You may imagine that num[-1] = num[n] = -∞.

const findPeakElement = (arr, start = 0, end = arr.length - 1) => {
  if (start === end)
    return start;

  let midL = start + (end - start) / 2 ^ 0;
  let midR = midL + 1;

  return arr[midL] > arr[midR]
    ? findPeakElement(arr, start, midL)
    : findPeakElement(arr, midR, end);
};
