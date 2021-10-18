/**
 * @param {string} s
 * @return {string}
 */
 var toLowerCase = function(s) {
  let res = ''
  for (let i = 0; i < s.length; i++) {
    const code = s[i].charCodeAt()
    if (code >= 65 && code <= 90) { // A-Z  65-90
      res += String.fromCharCode(code + 32)
    } else {
      res += s[i]
    }
  }
  return res
};