// Implement `_.once()`
// https://bigfrontend.dev/problem/implement-once

const once = (fn) => {
    let init = Symbol()
    let result = init

    return function(...args) {
        return init !== result ? result : result = fn.apply(this, args)
    }
}