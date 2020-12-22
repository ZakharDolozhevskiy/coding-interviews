// implement Promise.prototype.finally()
// https://bigfrontend.dev/problem/implement-Promise-prototype-finally/discuss

let myFinally = async (p, cb) => {
    let val

    try {
        val = await p
    } catch (e) {
        await cb()
        return Promise.reject(e)
    }

    await cb()
    return Promise.resolve(val)
}

let myFinally = (p, cb) => {
    return p.then(
        (val) => Promise.resolve(cb()).then(() => val),
        (err) => Promise.resolve(cb()).then(() => Promise.reject(err))
    )
}