var MagicDictionary = function() {
    this.dict = []
  };
  
  /** 
   * @param {string[]} dictionary
   * @return {void}
   */
  MagicDictionary.prototype.buildDict = function(dictionary) {
    this.dict = dictionary
  };
  
  /** 
   * @param {string} searchWord
   * @return {boolean}
   */
  MagicDictionary.prototype.search = function(searchWord) {
    let canConvert = false
    for (const word of this.dict) {
      if (word.length !== searchWord.length) continue
      let diffNum = 0
      for (let i = 0; i < word.length; i++) {
        if (word[i] !== searchWord[i]) diffNum++
        if (diffNum > 1) break
      }
      if (diffNum === 1) {
        canConvert = true
        break
      }
    }
    return canConvert
  };
  
  /**
   * Your MagicDictionary object will be instantiated and called as such:
   * var obj = new MagicDictionary()
   * obj.buildDict(dictionary)
   * var param_2 = obj.search(searchWord)
   */