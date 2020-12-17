// implement curry()
// https://bigfrontend.dev/problem/implement-curry

const curry = (f) => {
    return function helper(...args) {
        if (args.every(arg => arg !== curry.placeholder) && args.length >= f.length) {
            return f(...args);
        }
        return (...nextArgs) => helper(...curry.mergeArgs(args, nextArgs))
    }
}

curry.placeholder = Symbol()

curry.mergeArgs = (args, nextArgs) =>
    args.map(arg => arg === curry.placeholder ? nextArgs.shift() : arg)
        .concat(nextArgs)