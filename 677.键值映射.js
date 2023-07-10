var MapSum = function() {
    this.map = new Map()
  };
  
  /** 
   * @param {string} key 
   * @param {number} val
   * @return {void}
   */
  MapSum.prototype.insert = function(key, val) {
    this.map.set(key, val)
  };
  
  /** 
   * @param {string} prefix
   * @return {number}
   */
  MapSum.prototype.sum = function(prefix) {
    let sum = 0
    this.map.forEach((v, k) => {
      if (k.indexOf(prefix) === 0) sum += v
    })
    return sum
  };
  
  /**
   * Your MapSum object will be instantiated and called as such:
   * var obj = new MapSum()
   * obj.insert(key,val)
   * var param_2 = obj.sum(prefix)
   */