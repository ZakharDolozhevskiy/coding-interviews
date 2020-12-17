 // Implement throttle()


 // Basic
 const throttle = function(f, wait) {
    let timeout = null
    let last_args = []

    return (...args) => {
        if (timeout) {
            last_args = args
        } else {
            timeout = setTimeout(() => {
                last_args.length && f(...last_args)
                lest_args = []
                timeout = null
            }, wait)

            f(...args)
        }
    }
}