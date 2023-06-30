/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.map = {}
    this.capacity = capacity
    this.curSize = 0
    this.freq = {}
    this.maxTimer = 0
  };
  
  /** 
   * @param {number} key
   * @return {number}
   */
  LRUCache.prototype.get = function(key) {
    if (this.map[key] !== undefined) {
      this.freq[key] = ++this.maxTimer
      return this.map[key]
    }
    return -1
  };
  
  /** 
   * @param {number} key 
   * @param {number} value
   * @return {void}
   */
  LRUCache.prototype.put = function(key, value) {
    if (this.map[key] !== undefined) this.map[key] = value
    else {
      if (this.curSize < this.capacity) {
        this.map[key] = value
        this.curSize++
      } else {
        let keyToBeDetele = -1, usedNum = Infinity
        Object.entries(this.freq).forEach(([k, v]) => {
          if (v < usedNum) {
            usedNum = v
            keyToBeDetele = k
          }
        })
        delete this.freq[keyToBeDetele]
        delete this.map[keyToBeDetele]
        this.map[key] = value
      }
    }
    this.freq[key] = ++this.maxTimer
  };
  
  /**
   * Your LRUCache object will be instantiated and called as such:
   * var obj = new LRUCache(capacity)
   * var param_1 = obj.get(key)
   * obj.put(key,value)
   */