/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function(k, nums) {
    this.k = k
    nums.sort((a, b) => b - a)
    this.nums = nums
  };
  
  /** 
   * @param {number} val
   * @return {number}
   */
  KthLargest.prototype.add = function(val) {
    let hasInsert = false
    for (let i = 0; i < this.nums.length; i++) {
      if (val >= this.nums[i]) {
        hasInsert = true
        this.nums.splice(i, 0, val)
        break
      }
    }
    if (!hasInsert) this.nums.push(val)
    return this.nums[this.k - 1]
  };
  
  /**
   * Your KthLargest object will be instantiated and called as such:
   * var obj = new KthLargest(k, nums)
   * var param_1 = obj.add(val)
   */