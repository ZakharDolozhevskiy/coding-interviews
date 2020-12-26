// Implement memoizeOne()
// https://bigfrontend.dev/problem/implement-memoizeOne
function isEqualDefault(arg1 = [], arg2 = []) {
  if (arg1.length !== arg2.length) {
    return false
  }

  for (let i = 0; i < arg1.length; i++) {
    if (arg1[i] !== arg2[i]) {
      return false
    }
  }

  return true
}

function memoizeOne(func, isEqual = isEqualDefault) {
  let last_args, last_res, last_context, first = true

  return function(...args) {
    if (first || !isEqual(args, last_args) || last_context !== this) {
      last_res = func.call(this, ...args)
      last_args = args
      last_context = this
      first = false
    }

    return last_res
  }
}