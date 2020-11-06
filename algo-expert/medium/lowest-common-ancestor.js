/**
 * Lowest Common Ancestor of a Binary Tree
 *
 * https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/
 */

const lowestCommonAncestor = (root, p, q) => {
    var ancestor = []
    helper(root, p, q, ancestor)
    return ancestor.pop()
}

const helper = (current, p, q, aux) => {
  if (current === null) {
    return false;
  }

  const m = current === p || current === q ? 1 : 0
  const l = helper(current.left, p, q, aux) ? 1 : 0
  const r = helper(current.right, p, q, aux) ? 1 : 0

  if (m + l + r >= 2)  { aux.push(current) }

  return m || l || r
}

// Iterative

const lowestCommonAncestorIterative = (root, p, q) => {
  const stack = []
  const parents = new Map()
  const ancestors = new Map()

  stack.push(root)
  parents.set(root, null)

  while(!parents.has(p) || !parents.has(q)) {
    const current = stack.pop()

    if (current.left) {
      parents.set(current.left, current)
      stack.push(current.left)
    }

    if (current.right) {
      parents.set(current.right, current)
      stack.push(current.right)
    }
  }

  let next = null

  next = p
  // Iterate from one of target node to root building ancestors map
  while (next) {
    ancestors.set(next)
    next = parents.get(next)
  }

  next = q
  // Look for intersection with one parent node from another target
  while (!ancestors.has(next)) {
    next = parents.get(next)
  }

  return next
}