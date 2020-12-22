// auto-retry Promise on rejection
// https://bigfrontend.dev/problem/retry-promise-on-rejection

function fetchWithAutoRetry(fetcher, maximumRetryCount) {
  return fetcher().catch(err => {
    if (maximumRetryCount) {
      return fetchWithAutoRetry(fetcher, maximumRetryCount - 1)
    } else {
      throw err
    }
  })
}