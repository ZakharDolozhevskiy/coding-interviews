// Implement `Promise.all()`
// https://bigfrontend.dev/problem/implement-Promise-all

function all(promises) {
  return new Promise((resolve, reject) => {
      let counter = 0
      let results = []
      let target = promises.length

      if (!promises.length) {
        resolve(results)
      }

      promises.forEach((p, index) => {
        if (p instanceof Promise) {
          p.then(
            (data) => {
              results[index] = data
              counter++
              counter === target && resolve(results)
            },
            (error) => reject(error)
          )
        } else {
          results[index] = p
          counter++
          counter === target && resolve(results)
        }
      })
  })
}