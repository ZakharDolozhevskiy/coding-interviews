function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

const serialize = function(root) {
  return root ? encode(root, []).toString() : '';
};

const encode = function(node, values) {
  if (node) {
    values.push(node.val);
    encode(node.left, values);
    encode(node.right, values);
  } else {
    values.push('#');
  }
  return values;
};

const deserialize = function(data) {
  return data ? decode(data.split(',')) : null;
};

const decode = function(values) {
  const value = values.shift();

  if (value !== '#') {
    const node = new TreeNode(+value);
    node.left = decode(values);
    node.right = decode(values);
    return node;
  } else {
    return null;
  }
};
