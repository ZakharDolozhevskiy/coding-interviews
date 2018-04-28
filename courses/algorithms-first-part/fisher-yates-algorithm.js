/**
 * @param {number[]} nums
 */
let Solution = function(nums) {
  this.array = nums;
  this.original = nums.slice();
};

/**
 * Resets the array to its original configuration and return it.
 * @return {number[]}
 */
Solution.prototype.reset = function() {
  this.array = this.original;
  this.original = this.original.slice();
  return this.array;
};

Solution.prototype.random = function(min, max) {
  return min + (Math.random() * (max - min) ^ 0);
};

/**
 * Returns a random shuffling of the array.
 * @return {number[]}
 */
Solution.prototype.shuffle = function() {
  for (let i = 0, j; i < this.array.length; i++) {
    j = this.random(i, this.array.length);
    [ this.array[i], this.array[j] ] = [ this.array[j], this.array[i] ];
  }
  return this.array;
};

/**
 * Your Solution object will be instantiated and called as such:
 * let obj = Object.create(Solution).createNew(nums)
 * let param_1 = obj.reset()
 * let param_2 = obj.shuffle()
 */