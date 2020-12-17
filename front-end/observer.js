// create an Observable
// https://bigfrontend.dev/problem/create-an-Observable

class Observable {
    constructor(setup) {
        this.setup = setup
    }

    subscribe(subscriber) {
        const observer = new Observer(subscriber)
        this.setup(observer)
        return { unsubscribe: () => observer.unsubscribe() }
    }
}

class Observer {
    hasError = false
    isCompleted = false

    constructor(subscriber) {
        if (typeof subscriber !== 'function') {
            this.callbacks = {
                next: () => null,
                error: () => null,
                complete: () => null,
                ...subscriber
            }
        } else {
            this.callbacks = { next: subscriber }
        }
    }

    next(value) {
        if (!this.hasError && !this.isCompleted) {
            this.callbacks.next(value)
        }
    }

    error(err) {
        if (!this.hasError && !this.isCompleted) {
            this.callbacks.error(err)
            this.hasError = true
        }
    }

    complete() {
        if (!this.hasError && !this.isCompleted) {
            this.callbacks.complete()
            this.isCompleted = true
        }
    }

    unsubscribe() {
        this.callbacks = {
            next: () => null,
            error: () => null,
            complete: () => null
        }
    }
}