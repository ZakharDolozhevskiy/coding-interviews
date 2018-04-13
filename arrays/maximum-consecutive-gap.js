// Given an unsorted array, find the maximum difference between the successive elements
// in its sorted form.
//
// Try to solve it in linear time/space.
//
// Input : [1, 10, 5]
// Output : 5

const maximumGap = array => {
  let min = Infinity;
  let max = -Infinity;

  for (let num of array) {
    max = Math.max(max, num);
    min = Math.min(min, num);
  }

  let buckets = [];
  let bucketSize = Math.max(1, (max - min) / array.length - 1 ^ 0);
  let bucketsCount = (max - min) / bucketSize + 1;

  while (0 < bucketsCount--) {
    buckets.push({
      used: false,
      min: Infinity,
      max: -Infinity
    })
  }

  for (let num of array) {
    let idx = (num - min) / bucketSize ^ 0;
    buckets[idx].max = Math.max(buckets[idx].max, num);
    buckets[idx].min = Math.min(buckets[idx].min, num);
    buckets[idx].used = true;
  }

  let maxGap = 0;
  let prevMax = min;

  for (let bucket of buckets) {
    if (!bucket.used)
      continue;

    maxGap = Math.max(maxGap, bucket.min - prevMax);
    prevMax = bucket.max;
  }

  return maxGap;
};

console.log(maximumGap([2, 4, 8, 5, 12]));