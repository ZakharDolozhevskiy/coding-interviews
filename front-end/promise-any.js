// Implement `Promise.any()`
// https://bigfrontend.dev/problem/implement-Promise-any
function any(promises) {
  if (promises.length === 0) {
    return Promise.resolve([]);
  }

  let errors = []

  return new Promise((resolve, reject) => {
    promises.forEach((promise, index) => {
      promise
        .then((result) => resolve(result))
        .catch((error) => {
          errors[index] = error
          errors.length === promises.length && reject(
            new AggregateError('No Promise in Promise.any was resolved', errors)
          )
        })
    })
  })
}