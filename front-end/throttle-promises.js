// throttle Promises
// https://bigfrontend.dev/problem/throttle-Promises

const throttlePromises = (func, max) => {
    const result = [], index = 0, pending = 0;

    return new Promise((resolve, reject) => {
        const worker = (value) => {
            while (pending < max && index < func.length) {
                func[index]()
                    .then(value => {
                        pending--
                        return worker(value)
                    })
                    .catch(error => reject(error))

                pending++
                index++
            }

            if (result.length === func.length) {
                Promise.all(result).then(resolve)
            }

            return value
        }
        worker()
    })
}