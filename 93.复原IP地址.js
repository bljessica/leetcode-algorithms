/**
 * @param {string} s
 * @return {string[]}
 */
 var restoreIpAddresses = function(s) {
  const res = []
  function dfs(curS, numLeft, arr = []) {
    if (numLeft === 0) {
      if (curS.length === 0) {
        res.push(arr.slice().join('.'))
      }
      return
    }
    if (curS[0] === '0') {
      dfs(curS.slice(1), numLeft - 1, [...arr, 0])
    } else {
      const maxLen = (curS.length < 3) ? curS.length : (parseInt(curS.substring(0, 3)) > 255 ? 2 : 3)
      for (let i = 1; i <= maxLen; i++) {
        dfs(curS.slice(i), numLeft - 1, [...arr, parseInt(curS.substring(0, i))])
      }
    }
  }
  dfs(s, 4)
  return Array.from(new Set(res))
};