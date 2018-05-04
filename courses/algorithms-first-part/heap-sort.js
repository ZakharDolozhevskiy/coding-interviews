class HeapSort {
  constructor(arr) {
    this.arr = arr;
    this.ln = arr.length - 1;
  }

  sink(current) {
    while ((current * 2) + 1 <= this.ln) {
      let left = (current * 2) + 1;

      if (left < this.ln && this.arr[left + 1] > this.arr[left]) left++;
      if (this.arr[left] < this.arr[current]) break;

      [this.arr[left], this.arr[current]] = [this.arr[current], this.arr[left]];
      current = left;
    }
  }

  sort() {
    for (let k = this.ln / 2 ^ 0; k >= 0; k--) {
      this.sink(k);
    }

    while (this.ln > 0) {
      [this.arr[this.ln], this.arr[0]] = [this.arr[0], this.arr[this.ln]];
      this.ln--;
      this.sink(0);
    }
  }
}

let test = ['S','O','R','T','E','X','A','M','P','L','E'];
let heap = new HeapSort(test);

heap.sort();
console.log(test);