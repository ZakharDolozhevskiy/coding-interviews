// implement range()
// https://bigfrontend.dev/problem/implement-range

function* range(from, to) {
    while (from <= to) {
        yield from++
    }
}

function range(from, to) {
    return {
        next: () => {
            from <= to
                ? { value: from++, done: false }
                : { value: to, done: true }
        },
        [Symbol.iterator]: function() { return this }
    }
}