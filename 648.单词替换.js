/**
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {string}
 */
var replaceWords = function(dictionary, sentence) {
    const set = new Set(dictionary)
    return sentence.split(' ').map(str => {
      for (let i = 1; i <= str.length; i++) {
        if (set.has(str.substring(0, i))) return str.substring(0, i)
      }
      return str
    }).join(' ')
  };