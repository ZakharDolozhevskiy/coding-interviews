// Create your own `Function.prototype.call`
// https://bigfrontend.dev/problem/create-call-method

Function.prototype.mycall = function(context, ...args) {
    let res, key = Symbol();
    // Convert primitives
    context = context || window
    context = typeof context === 'object' ? context : Object(context)

    context[key] = this
    res = context[key](...args)
    delete context[key]

    return res
}