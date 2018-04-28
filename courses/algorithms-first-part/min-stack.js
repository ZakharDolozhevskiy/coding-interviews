
const MinStack = function() {
  this.stack = []
  this.min = Infinity
};

MinStack.prototype.push = function(x) {
  if (x <= this.min) {
    this.stack.push(this.min)
    this.min = x
  }
  this.stack.push(x)
};

MinStack.prototype.pop = function() {
  this.stack.pop() === this.min && (this.min = this.stack.pop())
};

MinStack.prototype.top = function() {
  return this.stack[this.stack.length - 1]
};

MinStack.prototype.getMin = function() {
  return this.min
};
