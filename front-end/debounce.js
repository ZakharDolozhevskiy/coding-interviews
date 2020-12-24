// implement basic debounce()
// https://bigfrontend.dev/problem/implement-basic-debounce

function debounce(func, wait, option = {leading: false, trailing: true}) {
    let timeout = null;
    let skip = false

    return (...args) => {
      if (timeout) {
        skip = false
        clearTimeout(timeout);
      } else {
        if (option.leading) {
          func(...args)
          skip = true
        }
      }

      timeout = setTimeout(() => {
        !skip && option.trailing && func(...args)
        timeout = null
      }, wait)
    }
}