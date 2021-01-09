// Find Median from Data Stream
// https://leetcode.com/problems/find-median-from-data-stream/solution/

/**
 * initialize your data structure here.
 */
var MedianFinder = function() {
    this.list = []
};

/**
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
    if (this.list.length === 0) {
        this.list.push(num)
    }

    else if (this.list.length === 1) {
        this.list[0] > num ? this.list.unshift(num) : this.list.push(num)
    }

    else {
        let left = 0, right = this.list.length

        while (left < right) {
            let mid = (left + right) / 2 ^ 0
            let val = this.list[mid]
            val < num ? (left = mid + 1) : (right = mid)
        }

        this.list.splice(left, 0, num)
    }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
    if (this.list.length === 0) {
        return null
    }

    if (this.list.length === 1) {
        return this.list[0]
    }

    if (this.list.length % 2 === 0) {
        return (
            this.list[this.list.length / 2 - 1]
            +
            this.list[this.list.length / 2]
        ) / 2
    } else {
        return this.list[this.list.length / 2  ^ 0]
    }
};

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */