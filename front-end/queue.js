// Implement a Queue by using Stack
// https://bigfrontend.dev/problem/implement-a-queue-by-using-stack
class Queue {
  stack = new Stack()
  aux = new Stack()

  enqueue(element) {
    for (let i = 0; i < this.stack.size(); i++) {
      this.aux.push(this.stack.pop())
    }

    this.stack.push(element)

    for (let i = 0; i < this.aux.size(); i++) {
      this.stack.push(this.aux.pop())
    }
  }
  peek() {
    return this.stack.peek()
  }
  size() {
    return this.stack.size()
  }
  dequeue() {
    return this.stack.pop()
  }
}