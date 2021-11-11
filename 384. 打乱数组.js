/**
 * @param {number[]} nums
 */
 var Solution = function(nums) {
  this.nums = nums
};

/**
 * @return {number[]}
 */
Solution.prototype.reset = function() {
  return this.nums
};

/**
 * @return {number[]}
 */
Solution.prototype.shuffle = function() {
  const nums = this.nums.slice()
  const len = nums.length
  for (let i = 0; i < len; i++) {
    const rand = getRandomNum(i, len - 1);
    [nums[i], nums[rand]] = [nums[rand], nums[i]]
  }
  return nums
};

const getRandomNum = (l, r) => {
  return Math.floor(Math.random() * (r - l + 1) + l)
}

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */