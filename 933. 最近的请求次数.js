var RecentCounter = function() {
  this.queue = []
};

/** 
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function(t) {
  this.queue.push(t)
  let num = 0
  for (let i = this.queue.length - 1; i >= 0; i--) {
    if (t - this.queue[i] <= 3000) {
      num++
    }
  }
  return num
};

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */