/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function(s) {
    const halfIdx = s.length / 2
    const a = s.slice(0, halfIdx), b = s.slice(halfIdx)
    const arr = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
    let aNum = 0, bNum = 0
    for (const c of a) {
      if (arr.includes(c)) aNum++
    }
    for (const c of b) {
      if (arr.includes(c)) bNum++
    } 
    return aNum === bNum
  };