class Node {
  constructor(value) {
    this.val = value;
    this.left = null;
    this.right = null;
    this.count = 1;
  }
}

class Range {
  constructor() {
    this.root = null;
  }

  put(value, node = this.root) {
    if (this.root === null) {
      return this.root = new Node(value);
    }

    if (node === null)
      return new Node(value);

    if (node.val > value)
      node.left = this.put(value, node.left);
    else if (node.val < value)
      node.right = this.put(value, node.right);
    else
      node.val = value;

    node.count = 1 + this.count(node.left) + this.count(node.right);

    return node;
  }

  count(node) {
    return node ? node.count : 0;
  }

  search(value, node = this.root) {
    if (node === null) return false;

    if (node.val > value)
      return this.search(value, node.left);
    else if (node.val < value)
      return this.search(value, node.right);
    else
      return true;
  }

  rank(value, node = this.root) {
    if (node === null) return 0;

    if (node.val > value)
      return this.rank(value, node.left);
    else if (node.val < value)
      return 1 + this.count(node.left) + this.rank(value, node.right);
    else
      return this.count(node.left)
  }

  size(hi, lo) {
    if (this.search(hi))
      return this.rank(hi) - this.rank(lo) + 1;
    else
      return this.rank(hi) - this.rank(lo);
  }

  range(hi, lo, node = this.root, result = []) {
    if (node === null) return result;

    lo < node.val && this.range(hi, lo, node.left, result);
    (node.val >= lo && node.val <= hi) && result.push(node.val);
    hi > node.val && this.range(hi, lo, node.right, result);

    return result;
  }
}