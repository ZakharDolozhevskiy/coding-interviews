function LazyMan(name, logFn) {
  return new Instance(name, logFn)
}

function Instance(name, logFn) {
  this.tasks = [{ type: 'init' }]
  Promise.resolve().then(() => this.trigger())

  this.trigger = () => {
    let task = this.tasks.shift()
    if (task) {
      if (task.type === 'init') {
        logFn(`Hi, I'm ${name}.`)
        this.trigger()
      }
      if (task.type === 'eat') {
        logFn(`Eat ${task.value}.`)
        this.trigger()
      }
      if (task.type === 'sleep') {
        setTimeout(() => {
          logFn(`Wake up after ${task.value} ${task.value > 1 ? 'seconds' : 'second'}.`)
          this.trigger()
        }, task.value * 1000)
      }
    }
  }

  this.eat = (value) => {
    this.tasks.push({ type: 'eat', value })
    return this
  }

  this.sleep = (value) => {
    this.tasks.push({ type: 'sleep', value })
    return this
  }

  this.sleepFirst = (value) => {
    this.tasks.unshift({ type: 'sleep', value })
    return this
  }
}