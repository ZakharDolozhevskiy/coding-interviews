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

// With leading and trailing
function throttle(func, wait, option = {leading: true, trailing: true}) {
  let timeout = null
  let last_args = null

  let helper = function() {
    if (option.trailing && last_args !== null) {
      func(...last_args)
      last_args = null
      timeout = setTimeout(helper, wait)
    } else {
      timeout = null
    }
  }

  return (...args) => {
    if (timeout !== null) {
      last_args = args
    } else {
      option.leading ? func(...args) : (last_args = args)
      timeout = setTimeout(helper, wait)
    }
  }
}