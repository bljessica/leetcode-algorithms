/**
 * @param {number} n
 * @param {number[]} blacklist
 */
var Solution = function(n, blacklist) {
    const blackSet = new Set()
    this.b2wMap = new Map()
    this.bound = n - blacklist.length
    for (const b of blacklist) {
      if (b >= this.bound) {
        blackSet.add(b)
      }
    }
    let cur = this.bound
    for (const b of blacklist) {
      if (b < this.bound) {
        while (blackSet.has(cur)) cur++
        this.b2wMap.set(b, cur)
        cur++
      }
    }
  };
  
  /**
   * @return {number}
   */
  Solution.prototype.pick = function() {
    const idx = Math.floor(Math.random() * this.bound)
    return this.b2wMap.get(idx) || idx
  };
  
  /**
   * Your Solution object will be instantiated and called as such:
   * var obj = new Solution(n, blacklist)
   * var param_1 = obj.pick()
   */