var RandomizedSet = function() {
    this.set = new Set()
  };
  
  /** 
   * @param {number} val
   * @return {boolean}
   */
  RandomizedSet.prototype.insert = function(val) {
    if (this.set.has(val)) return false
    this.set.add(val)
    return true
  };
  
  /** 
   * @param {number} val
   * @return {boolean}
   */
  RandomizedSet.prototype.remove = function(val) {
    if (!this.set.has(val)) return false
    this.set.delete(val)
    return true
  };
  
  /**
   * @return {number}
   */
  RandomizedSet.prototype.getRandom = function() {
    const idx = Math.floor(this.set.size * Math.random())
    let i = 0
    for (const v of this.set.values()) {
      if (i === idx) return v
      i++
    }
  };
  
  /**
   * Your RandomizedSet object will be instantiated and called as such:
   * var obj = new RandomizedSet()
   * var param_1 = obj.insert(val)
   * var param_2 = obj.remove(val)
   * var param_3 = obj.getRandom()
   */