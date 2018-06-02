class Node {
  constructor(lo, hi) {
    this.lo = lo;
    this.hi = hi;
    this.max = hi;
    this.left = null;
    this.right = null;
  }
}

class IntervalST {
  constructor(lo, hi) {
    this.root = new Node(lo, hi);
  }

  put(lo, hi, node = this.root) {
    if (node === null)
      return new Node(lo, hi);

    if (node.lo > lo) {
      node.left = this.put(lo, hi, node.left);
      node.max = Math.max(node.max, node.left.max);
    }
    else if (node.lo < lo) {
      node.right = this.put(lo, hi, node.right);
      node.max = Math.max(node.max, node.right.max);
    }

    return node;
  }

  intersects(lo, hi, node = this.root) {
    if (node === null || lo > node.lo && lo < node.hi)
      return node;

    if (node.left === null)
      return this.intersects(lo, hi, node.right);
    else if (node.left.max < lo)
      return this.intersects(lo, hi, node.right);
    else
      return this.intersects(lo, hi, node.left);
  }
}
