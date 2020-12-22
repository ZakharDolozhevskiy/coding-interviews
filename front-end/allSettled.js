
/**
 * @param {Array<any>} promises - notice that input might contains non-promises
 * @return {Promise<Array<{status: 'fulfilled', value: any} | {status: 'rejected', reason: any}>>}
 */
function allSettled(promises) {
  return new Promise((resolve, reject) => {
    let result = []
    let resultCount = 0

    if (promises.length === 0) { resolve(result) }

    promises.forEach((promise, index) => {
      (promise instanceof Promise ? promise : Promise.resolve(promise))
        .then((value) => {
          resultCount++
          result[index] = { status: 'fulfilled', value }
          resultCount === promises.length && resolve(result)
        })
        .catch((reason) => {
          resultCount++
          result[index] = { status: 'rejected', reason }
          resultCount === promises.length && resolve(result)
        })
    })
  })
}

