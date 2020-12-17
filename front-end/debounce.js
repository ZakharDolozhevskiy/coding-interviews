// implement basic debounce()
// https://bigfrontend.dev/problem/implement-basic-debounce

const debounce = function(f, wait) {
    let timeout = null;

    return (...args) => {
        timeout && clearTimeout(timeout);
        timeout = setTimeout(() => f(...args), wait)
    }
}