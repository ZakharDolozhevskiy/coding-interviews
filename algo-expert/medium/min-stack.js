/**
 *
 * https://leetcode.com/problems/min-stack/submissions/
 *
 * https://leetcode.com/problems/min-stack/discuss/49014/Java-accepted-solution-using-one-stack - One stack min
 *
 * initialize your data structure here.
 */
var MinStack = function() {
    this.stack = []

    this.minStack = []
    this.maxStack = []
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    if (this.minStack.length === 0 || x <= this.minStack[this.minStack.length - 1]) {
        this.minStack.push(x)
    }

    if (this.maxStack.length === 0 || x <= this.maxStack[this.maxStack.length - 1]) {
        this.maxStack.push(x)
    }

    this.stack.push(x)
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    var removed = this.stack.pop()

    if (removed === this.minStack[this.minStack.length - 1]) {
        this.minStack.pop()
    }

    if (removed === this.maxStack[this.maxStack.length - 1]) {
        this.maxStack.pop()
    }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.minStack[this.minStack.length - 1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMax = function() {
    return this.maxStack[this.maxStack.length - 1]
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */