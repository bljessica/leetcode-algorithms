/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    const arr = path.split('/').filter(item => item.length && item != '/' && item != '.')
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] == '..') {
        if (i > 0) {
          arr.splice(i - 1, 2)
          i -= 2
        } else {
          arr.splice(i, 1)
          i--
        }
      }
    }
    return '/' + arr.join('/')
  };