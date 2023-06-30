/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    const res = []
    const isPan = (str) => {
      for (let i = 0;i < Math.floor(str.length / 2); i++) {
        if (str[i] != str[str.length - i - 1]) return false
      }
      return true
    }
    const recur = (idx, arr) => {
      if (idx === s.length) {
        res.push(arr)
        return
      }
      for (let i = idx; i < s.length; i++) {
        if (isPan(s.slice(idx, i + 1))) {
          const newArr = arr.slice()
          newArr.push(s.slice(idx, i + 1))
          recur(i + 1, newArr)
        }
      }
    }
    recur(0, [])
    return res
  };