class QuickSort {
  // Princeton course
  static pivotLeft(arr, start = 0, end = arr.length - 1) {
    if (start >= end) return;

    const index =this.basePartition(arr, start, end);

    this.pivotLeft(arr, start, index - 1);
    this.pivotLeft(arr, index + 1, end);
  }

  static basePartition(arr, start, end) {
    let i = start;
    let j = end + 1;

    while(true) {
      while(arr[++i] < arr[start])
        if (i === end) break;

      while(arr[start] < arr[--j])
        if (start === j) break;

      if (i >= j) break;

      [ arr[i], arr[j] ] = [ arr[j], arr[i] ];
    }

    [ arr[start], arr[j] ] = [ arr[j], arr[start] ];

    return j;
  }

  // Khan academy
  static pivotRight(arr, start = 0, end = arr.length - 1) {
    if (start >= end) return;

    const index = this.partitionWithPivot(arr, start, end);

    this.pivotRight(arr, start, index - 1);
    this.pivotRight(arr, index + 1, end);
  }

  static partitionWithPivot(arr, start, end) {
    let index = start;

    for (let i = start; i < end; i++) {
      if (arr[i] < arr[end]) {
        [ arr[i], arr[index] ] = [ arr[index], arr[i] ];
        index++;
      }
    }
    [ arr[end], arr[index] ] = [ arr[index], arr[end] ];

    return index;
  }

  // Preferable
  static treeWayQuickSort(arr, start = 0, end = arr.length - 1) {
    if (start >= end) return;

    let pivot = arr[start];
    let left = start;
    let right = end;
    let i = left;

    while (i <= right) {
      if (pivot > arr[i]) {
        [ arr[left],  arr[i] ] = [ arr[i], arr[left] ];
        left++; i++;
      }
      else if (arr[i] > pivot) {
        [ arr[right],  arr[i] ] = [ arr[i], arr[right] ];
        right--;
      }
      else { i++; }
    }

    this.treeWayQuickSort(arr, start, left - 1);
    this.treeWayQuickSort(arr, right + 1, end);
  }

  static quickSelect(arr, k) {
    let start = 0;
    let end = arr.length - 1;

    while (start < end) {
      let index = this.basePartition(arr, start, end);
      if (index < k)
        start = index + 1;
      else if (index > k)
        end = index - 1;
      else break;
    }

    return arr[k];
  }
}

console.log(QuickSort.quickSelect([3,5,-1,2], 1));

