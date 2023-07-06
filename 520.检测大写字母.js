/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
    if (word.toUpperCase() === word || word.toLowerCase() === word) return true
    return word[0].toLowerCase() + word.slice(1) === word.toLowerCase()
  };