const isSymmetric = function(root) {
  let isModified = false;
  let next = [];
  let nodes = Array.isArray(root) ? root : [ root ];

  if (!root) return true;

  for (let i = 0; i < nodes.length; i++) {
    let a = nodes[i];
    let b = nodes[nodes.length - 1 - i];

    if (a.val !== b.val)
      return false;
    else {
      a.val !== undefined && next.push(a.left || {});
      a.val !== undefined && next.push(a.right || {});
      isModified = isModified || a.left || a.right;
    }
  }

  return isModified ? isSymmetric(next) : true;
};