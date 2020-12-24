// implement Math.sqrt()
// https://bigfrontend.dev/problem/implement-Math-sqrt

const mySqrt = (x) => {
    if (x < 0 || isNaN(Number(x))) { return NaN }

    let a = 0
    let b = x

    while (a < b) {
        let c = Math.ceil((a + b) / 2)
        if (c * c > x) b = c - 1
        else a = c
    }

    return a
}