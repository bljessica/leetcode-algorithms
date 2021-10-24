/**
 * @param {string} sentence
 * @return {string}
 */
 var toGoatLatin = function(sentence) {
  const words = sentence.split(' ')
  const arr = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
  return words.map((word, idx) => {
    let res = ''
    if (arr.includes(word[0])) {
      res =  word + 'ma'
    } else {
      res = word.substring(1) + word[0] + 'ma'
    }
    for (let i = 0; i < idx + 1; i++) {
      res += 'a'
    }
    return res
  }).join(' ')
};