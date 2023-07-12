var MyCalendar = function() {
    this.arr = []
  };
  
  /** 
   * @param {number} start 
   * @param {number} end
   * @return {boolean}
   */
  MyCalendar.prototype.book = function(start, end) {
    for (const [l, r] of this.arr) {
      // if ((start < r && start >= l) || (end > l && end <= r) || (start <= l && end >= r) 
      //   || (start >= l && end <= r)) {
      if (l < end && start < r)
        return false
      // }
    }
    this.arr.push([start, end])
    return true
  };
  
  /**
   * Your MyCalendar object will be instantiated and called as such:
   * var obj = new MyCalendar()
   * var param_1 = obj.book(start,end)
   */