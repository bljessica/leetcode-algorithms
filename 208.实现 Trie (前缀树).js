var Trie = function() {
    this.tree = {}
    // this.stack = []
  };
  
  /** 
   * @param {string} word
   * @return {void}
   */
  Trie.prototype.insert = function(word) {
    let cur = this.tree
    for (const c of word) {
      if (!cur[c]) cur[c] = {}
      cur = cur[c]
    }
    cur['end'] = true
    // this.stack.push(word)
  };
  
  /** 
   * @param {string} word
   * @return {boolean}
   */
  Trie.prototype.search = function(word) {
    let cur = this.tree
    for (const c of word) {
      if (cur[c]) cur = cur[c]
      else return false
    }
    return cur['end'] || false
    // return this.stack.includes(word)
  };
  
  /** 
   * @param {string} prefix
   * @return {boolean}
   */
  Trie.prototype.startsWith = function(prefix) {
    let cur = this.tree
    for (const c of prefix) {
      if (cur[c]) cur = cur[c]
      else return false
    }
    return true
    // for (const word of this.stack) {
    //   if (word.indexOf(prefix) === 0) return true
    // }
    // return false
  };
  
  /**
   * Your Trie object will be instantiated and called as such:
   * var obj = new Trie()
   * obj.insert(word)
   * var param_2 = obj.search(word)
   * var param_3 = obj.startsWith(prefix)
   */