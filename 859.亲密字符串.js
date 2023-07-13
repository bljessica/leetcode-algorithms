/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var buddyStrings = function(s, goal) {
    if (s.length !== goal.length) return false
    if (s === goal) {
      const arr = s.split('')
      return arr.some(c => arr.indexOf(c) !== arr.lastIndexOf(c))
    } else {
      const notSameArr = []
      for (let i = 0; i < s.length; i++) {
        if (s[i] !== goal[i]) notSameArr.push(i)
        if (notSameArr.length > 2) return false
      }
      return s[notSameArr[0]] === goal[notSameArr[1]] && s[notSameArr[1]] === goal[notSameArr[0]]
    }
  };