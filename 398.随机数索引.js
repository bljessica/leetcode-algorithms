/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
    this.nums = nums
  };
  
  /** 
   * @param {number} target
   * @return {number}
   */
  Solution.prototype.pick = function(target) {
    const idxs = []
    for (let i = 0; i < this.nums.length; i++) {
      if (this.nums[i] === target) idxs.push(i)
    }
    const idx = Math.floor(idxs.length * Math.random())
    return idxs[idx]
  };
  
  /**
   * Your Solution object will be instantiated and called as such:
   * var obj = new Solution(nums)
   * var param_1 = obj.pick(target)
   */