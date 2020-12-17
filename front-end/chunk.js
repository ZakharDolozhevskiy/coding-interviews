// implement _.chunk()
// https://bigfrontend.dev/problem/implement-lodash-chunk

const chunk = (items, size) => {
    const result = []
    const aux = []

    for (let item of items) {
        if (aux.length === size) {
            result.push(aux.slice())
            aux.length = 0
        }
        aux.push(item)
    }

    aux.length && result.push(aux)

    return size >= 1 ? result : []
}