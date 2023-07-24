var StockSpanner = function() {
    // 1.
    // this.arr = []
    // 2.
    this.stack = [[-1, Number.MAX_SAFE_INTEGER]]
    this.idx = 0
  };
  
  /** 
   * @param {number} price
   * @return {number}
   */
  StockSpanner.prototype.next = function(price) {
    // 1.
    // this.arr.push(price)
    // let res = 0
    // for (let i = this.arr.length - 1; i >= 0; i--) {
    //   if (this.arr[i] <= price) res++
    //   else break
    // }
    // return res
    // 2.单调栈
    while (price >= this.stack[this.stack.length - 1][1]) this.stack.pop()
    let res = this.idx - this.stack[this.stack.length - 1][0]
    this.stack.push([this.idx++, price])
    return res
  };
  
  /**
   * Your StockSpanner object will be instantiated and called as such:
   * var obj = new StockSpanner()
   * var param_1 = obj.next(price)
   */