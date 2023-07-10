/**
 * @param {number} k
 */
var MyCircularQueue = function(k) {
    this.q = new Array(k)
    this.startIdx = 0
    this.endIdx = 0 // 下一个填入的位置
    this.len = 0
    this.k = k
  };
  
  /** 
   * @param {number} value
   * @return {boolean}
   */
  MyCircularQueue.prototype.enQueue = function(value) {
    if (this.len === this.k) return false
    this.q[this.endIdx] = value
    if (this.endIdx === this.k - 1) this.endIdx = 0
    else this.endIdx++
    this.len++
    return true
  };
  
  /**
   * @return {boolean}
   */
  MyCircularQueue.prototype.deQueue = function() {
    if (this.len === 0) return false 
    if (this.startIdx === this.k - 1) this.startIdx = 0
    else this.startIdx++
    this.len--
    return true
  };
  
  /**
   * @return {number}
   */
  MyCircularQueue.prototype.Front = function() {
    if (this.len) return this.q[this.startIdx]
    else return -1
  };
  
  /**
   * @return {number}
   */
  MyCircularQueue.prototype.Rear = function() {
    if (this.len) {
      if (this.endIdx === 0) return this.q[this.k - 1]
      else return this.q[this.endIdx - 1]
    }
    else return -1
  };
  
  /**
   * @return {boolean}
   */
  MyCircularQueue.prototype.isEmpty = function() {
    return this.len === 0
  };
  
  /**
   * @return {boolean}
   */
  MyCircularQueue.prototype.isFull = function() {
    return this.len === this.k
  };
  
  /**
   * Your MyCircularQueue object will be instantiated and called as such:
   * var obj = new MyCircularQueue(k)
   * var param_1 = obj.enQueue(value)
   * var param_2 = obj.deQueue()
   * var param_3 = obj.Front()
   * var param_4 = obj.Rear()
   * var param_5 = obj.isEmpty()
   * var param_6 = obj.isFull()
   */