/**
 * // This is the Iterator's API interface.
 * // You should not implement it, or speculate about its implementation.
 * function Iterator() {
 *    @ return {number}
 *    this.next = function() { // return the next number of the iterator
 *       ...
 *    }; 
 *
 *    @return {boolean}
 *    this.hasNext = function() { // return true if it still has numbers
 *       ...
 *    };
 * };
 */

/**
 * @param {Iterator} iterator
 */
 var PeekingIterator = function(iterator) {
  this.iterator = iterator
  this.nextEle = this.iterator.next()
};

/**
 * @return {number}
 */
PeekingIterator.prototype.peek = function() {
  return this.nextEle
};

/**
 * @return {number}
 */
PeekingIterator.prototype.next = function() {
  const cur = this.nextEle
  this.nextEle = this.iterator.hasNext() ? this.iterator.next() : null
  return cur
};

/**
 * @return {boolean}
 */
PeekingIterator.prototype.hasNext = function() {
  return this.nextEle != null
};

/** 
 * Your PeekingIterator object will be instantiated and called as such:
 * var obj = new PeekingIterator(arr)
 * var param_1 = obj.peek()
 * var param_2 = obj.next()
 * var param_3 = obj.hasNext()
 */