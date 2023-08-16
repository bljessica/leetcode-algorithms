/**
 * @param {string} key
 * @param {string} message
 * @return {string}
 */
var decodeMessage = function(key, message) {
    const arr = new Array(26).fill('')
    const visited = new Set()
    let cur = 0
    for (const c of key) {
      if (c !== ' ' && !visited.has(c)) {
        arr[cur++] = c
        visited.add(c)
      }
    }
    let res = ''
    for (const c of message) {
      if (c >= 'a' && c <= 'z') {
        const idx = arr.indexOf(c)
        res += String.fromCharCode('a'.charCodeAt() + idx)
      } else if (c === ' ') {
        res += c
      }
    }
    return res
  };