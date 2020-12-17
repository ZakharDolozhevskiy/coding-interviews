// first bad version
// https://bigfrontend.dev/problem/first-bad-version

const firstBadVersion = (isBad) => {
    return (version) => {
        let result = -1, left = 0, right = version

        while (left <= right) {
            let mid = Math.floor((left + right) / 2)

            if (isBad(mid)) {
                right = mid - 1
                result = mid
            } else {
                left = mid + 1
            }
        }

        return result
    }
}
