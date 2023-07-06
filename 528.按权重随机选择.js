/**
 * @param {number[]} w
 */
var Solution = function(w) {
    this.arr = w
    this.sum = _.sum(w)
    this.idxArr = []
    let sum = 0
    for (let i = 0; i < w.length; i++) {
      sum += w[i]
      this.idxArr.push(sum)
    }
  };
  
  /**
   * @return {number}
   */
  Solution.prototype.pickIndex = function() {
    const rand = Math.ceil(Math.random() * this.sum)
    if (rand <= this.idxArr[0]) return 0
    for (let i = 1; i < this.idxArr.length; i++) {
      if (rand > this.idxArr[i - 1] && rand <= this.idxArr[i]) return i
    }
  };
  
  /**
   * Your Solution object will be instantiated and called as such:
   * var obj = new Solution(w)
   * var param_1 = obj.pickIndex()
   */