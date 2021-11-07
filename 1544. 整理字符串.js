/**
 * @param {string} s
 * @return {string}
 */
 var makeGood = function(s) {
  let i = 0, needDelete = false
  let str = s
  while (i < str.length) {
    if ((str[i] >= 'a' && str[i] <= 'z' && str[i + 1] >= 'A' && str[i + 1] <= 'Z' && str[i] === str[i + 1].toLowerCase())
      || (str[i] >= 'A' && str[i] <= 'Z' && str[i + 1] >= 'a' && str[i + 1] <= 'z' && str[i].toLowerCase() === str[i + 1])) {
      str = str.substring(0, i) + str.substring(i + 2)
      needDelete = true
      i--
    }
    i++
    if (i >= str.length - 1 && needDelete) {
      i = 0
      needDelete = false
    }
  }
  return str
};