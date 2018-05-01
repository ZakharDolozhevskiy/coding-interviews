//
// parent = (index - 1) / 2
// left   = (index * 2) + 1
// right  = (index * 2) + 2
//
class Heap {
  constructor(input) {
    this.heap = input.slice();

    this.left = idx => (idx * 2) + 1;
    this.right = idx =>(idx * 2) + 2;
    this.parent = idx => (idx - 1) / 2 ^ 0;
    this.hasLeft = idx => this.left(idx) < this.heap.length;
    this.hasRight = idx => this.right(idx) < this.heap.length;
    this.hasParent = idx => this.parent(idx) >= 0;
  }

  add(item) {
    this.heap.push(item);
    this.heapifyUp();
  }

  peek() {
    return this.heap[0];
  }

  poll() {
    this.heap[0] = this.heap.pop();
    this.heapifyDown();
  }

  heapifyUp() {
    let current = this.heap.length - 1;

    while (this.hasParent(current)) {
      let parent = this.parent(current);
      
      if (this.heap[current] < this.heap[parent]) {
        [ this.heap[parent], this.heap[current] ] = [ this.heap[current], this.heap[parent] ];
        current = parent;
      } else {
        break;
      }
    }
  }

  heapifyDown() {
    let current = 0, l, r;

    while (this.hasLeft(current)) {
      l = this.left(current);
      r = this.right(current);

      if (this.hasRight(current) && this.heap[l] > this.heap[r]) l = r;

      if (this.heap[l] > this.heap[current])
        break;
      else
        [ this.heap[l], this.heap[current] ] = [ this.heap[current], this.heap[l] ];

      current = l;
    }
  }
}
