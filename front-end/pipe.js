// what is Composition? create a pipe()
// https://bigfrontend.dev/problem/what-is-composition-create-a-pipe

function pipe(funcs) {
  return (args) => {
    return funcs.reduce((acc, f) => f(acc), args)
  }
}