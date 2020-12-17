// Create an Event Emitter
// https://bigfrontend.dev/problem/create-an-Event-Emitter

class EventEmitter {
  handlers = {}

  subscribe(eventName, callback) {
    const cb = (...args) => callback(...args)

    this.handlers[eventName] = this.handlers[eventName] || new Set()
    this.handlers[eventName].add(cb)

  	return { release: () => this.handlers[eventName].delete(cb)}
  }

  emit(eventName, ...args) {
  	if (this.handlers[eventName]) {
      this.handlers[eventName].forEach((f) => f(...args))
    }
  }
}