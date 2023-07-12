/**
 * @param {number} n
 * @return {number}
 */
var monotoneIncreasingDigits = function(n) {
    const str = n.toString().split('').map(v => +v)
    let i = 1
    while (i < str.length && str[i] >= str[i - 1]) i++
    if (i < str.length) {
      while (i > 0 && str[i] < str[i - 1]) {
        str[i - 1]--
        i--
      }
      for (i = i + 1; i < str.length; i++) str[i] = 9
    }
    return parseInt(str.join(''))
  };