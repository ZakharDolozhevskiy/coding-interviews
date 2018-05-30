/**
 * Initialize your data structure here.
 */
var RandomizedSet = function() {
  this.positions = {};
  this.values = [];
};

/**
 * Inserts a value to the set. Returns true if the set did not already contain the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
  if (this.positions[val] === undefined) {
    this.values.push(val);
    this.positions[val] = this.values.length - 1;
    return true;
  } else {
    return false;
  }
};

/**
 * Removes a value from the set. Returns true if the set contained the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
  if (this.positions[val] !== undefined) {
    var pos = this.positions[val];
    var lastIndex = this.values.length - 1;
    var lastValue = this.values[lastIndex];

    this.positions[lastValue] = pos;
    this.positions[val] = undefined;

    this.values[pos] = lastValue;
    this.values.pop();

    return true;
  } else {
    return false;
  }
};

/**
 * Get a random element from the set.
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
  return this.values[Math.random() * this.values.length ^ 0];
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = Object.create(RandomizedSet).createNew()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */