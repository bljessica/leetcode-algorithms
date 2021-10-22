/**
 * @param {string[]} words
 * @return {number}
 */
 var uniqueMorseRepresentations = function(words) {
  const arr = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...",
    "-","..-","...-",".--","-..-","-.--","--.."]
  const set = new Set()
  words.forEach(word => {
    let str = ''
    for (const c of word) {
      str += arr[c.charCodeAt() - 97]
    }
    set.add(str)
  })
  return set.size
};