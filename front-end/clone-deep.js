// create `_.cloneDeep()`
// https://bigfrontend.dev/problem/create-cloneDeep
function cloneDeep(data, proccesed = new Map()) {
  if (data === null || typeof data !== 'object') {
    return data
  }

  if (!proccesed.has(data)) {
    let cloned = data instanceof Array ? [] : {}
    proccesed.set(data, cloned)

    Object.getOwnPropertyNames(data)
      .concat(Object.getOwnPropertySymbols(data))
        .forEach(key => cloned[key] = cloneDeep(data[key], proccesed))

    return cloned
  } else {
    return proccesed.get(data)
  }
}