var Twitter = function() {
    this.postMap = {}
    this.followMap = {}
    this.timer = 1
  };
  
  /** 
   * @param {number} userId 
   * @param {number} tweetId
   * @return {void}
   */
  Twitter.prototype.postTweet = function(userId, tweetId) {
    if (!this.postMap[userId]) this.postMap[userId] = []
    this.postMap[userId].push((this.timer++) + ',' + tweetId)
  };
  
  /** 
   * @param {number} userId
   * @return {number[]}
   */
  Twitter.prototype.getNewsFeed = function(userId) {
    let res = []
    res.push(...(this.postMap[userId] || []))
    if (this.followMap[userId]) {
      for(const uId of this.followMap[userId]) {
        res.push(...(this.postMap[uId] || []))
      }
    }
    res = Array.from(new Set(res))
    res.sort((a, b) => Number(b.split(',')[0]) - Number(a.split(',')[0]))
    res = res.map(item => item.split(',')[1])
    return res.length >= 10 ? res.slice(0, 10) : res
  };
  
  /** 
   * @param {number} followerId 
   * @param {number} followeeId
   * @return {void}
   */
  Twitter.prototype.follow = function(followerId, followeeId) {
    if (!this.followMap[followerId]) this.followMap[followerId] = []
    this.followMap[followerId].push(followeeId)
  };
  
  /** 
   * @param {number} followerId 
   * @param {number} followeeId
   * @return {void}
   */
  Twitter.prototype.unfollow = function(followerId, followeeId) {
    const idx = this.followMap[followerId] ? this.followMap[followerId].indexOf(followeeId) : -1
    if (idx === -1) return
    this.followMap[followerId].splice(idx, 1)
  };
  
  /**
   * Your Twitter object will be instantiated and called as such:
   * var obj = new Twitter()
   * obj.postTweet(userId,tweetId)
   * var param_2 = obj.getNewsFeed(userId)
   * obj.follow(followerId,followeeId)
   * obj.unfollow(followerId,followeeId)
   */