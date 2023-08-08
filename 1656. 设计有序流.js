/**
 * @param {number} n
 */
var OrderedStream = function(n) {
    this.q = new Array(n).fill('')
    this.ptr = 0
  };
  
  /** 
   * @param {number} idKey 
   * @param {string} value
   * @return {string[]}
   */
  OrderedStream.prototype.insert = function(idKey, value) {
    const res = []
    this.q[idKey - 1] = value
    if (this.q[this.ptr].length) {
      for (let i = this.ptr; i < this.q.length; i++) {
        if (this.q[i].length) {
          res.push(this.q[i])
          this.ptr++
        } else
          break
      } 
    }
    return res
  };
  
  /**
   * Your OrderedStream object will be instantiated and called as such:
   * var obj = new OrderedStream(n)
   * var param_1 = obj.insert(idKey,value)
   */