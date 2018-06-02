class Node {
  constructor(v) {
    this.val = v;
    this.right = null;
    this.left = null;
    this.color = 'red';
  }
}

class RedBlackBST {
  constructor(root) {
    this.root = root;
  }

  put(value, node = this.root) {
    if (node === null)
      return new Node(value);

    if (node.val > value)
      node.left = this.put(node.left, value);
    else if (node.val < value)
      node.right = this.put(node.right, value);
    else
      node.val = value;

    if (this.isRed(node.right) && !this.isRed(node.left))
      node = this.rotateLeft(node);
    if (this.isRed(node.left) && this.isRed(node.left.left))
      node = this.rotateRight(node);
    if (this.isRed(node.right) && this.isRed(node.left))
      this.flipColors(node);

    return node;
  }

  search(key) {
    let node = this.root;

    while (node !== null) {
      if (node.val === key) return node;
      if (node.val > key) node = node.left;
      else node = node.right;
    }
    return null;
  }

  rotateLeft(node) {
    let x = node.right;
    node.right = x.left;
    x.left = node;
    x.color = node.color;
    node.color = 'red';
    return x;
  }

  rotateRight(node) {
    let x = node.left;
    node.left = x.right;
    x.right = node;
    x.color = node.color;
    node.color = 'red';
    return x;
  }

  flipColors(node) {
    node.color = 'red';
    node.left.color = 'black';
    node.right.color = 'black';
  }

  isRed(node) {
    if (node === null) return false;
    return node.color === 'red';
  }
}