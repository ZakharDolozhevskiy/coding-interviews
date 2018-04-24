// merge sort implementation

const mergeSort = (arr, temp = [], start = 0, end = arr.length - 1) => {
  if (start >= end) return;

  let mid = start + (end - start) / 2 ^ 0;

  mergeSort(arr, temp, start, mid);
  mergeSort(arr, temp, mid + 1, end);

  if (arr[mid] >= arr[mid + 1]) {
    merge(arr, temp, start, mid, end)
  }
};

const merge = (arr, temp, start, mid, end) => {
  for (let k = start; k <= end; k++)
    temp[k] = arr[k];

  let i = start; let j = mid + 1;

  for (let k = start; k <= end; k++) {
    if (i > mid)                arr[k] = temp[j++];
    else if (j < mid)           arr[k] = temp[i++];
    else if (temp[i] > temp[j]) arr[k] = temp[j++];
    else                        arr[k] = temp[i++];
  }
};

let arr = [1,4,3,2,5,6,7,8,9,10];
mergeSort(arr);