/**
 * @param {string} s
 * @return {boolean}
 */
 var canPermutePalindrome = function(s) {
  const map = new Map()
  for (let c of s) {
    const cur = map.get(c)
    if (!cur) {
      map.set(c, 1)
    } else {
      map.set(c, cur + 1)
    }
  }
  let oddNum = 0
  map.forEach(num => {
    if (num % 2 === 1) {
      oddNum++
    }
  })
  return oddNum === 1 || oddNum === 0
};