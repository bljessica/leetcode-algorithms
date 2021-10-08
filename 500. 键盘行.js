/**
 * @param {string[]} words
 * @return {string[]}
 */
 var findWords = function(words) {
  const arr = ['qwertyuiop', 'asdfghjkl', 'zxcvbnm']
  const res = []
  words.forEach(word => {
    const flag = arr.some(str => {
      return word.split('').every(c => {
        return str.indexOf(c.toLowerCase()) !== -1 || str.indexOf(c.toUpperCase()) !== -1
      })
    })
    if (flag) {
      res.push(word)
    }
  })
  return res
};