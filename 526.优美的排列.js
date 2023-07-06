/**
 * @param {number} n
 * @return {number}
 */
var countArrangement = function(n) {
    let res = 0
    const backtrace = (idx, arr) => {
      if (idx === n + 1) {
        res++
        return
      }
      for (let i = 1; i <= n; i++) {
        if ((i % idx === 0 || idx % i === 0) && !arr.includes(i)) {
          backtrace(idx + 1, [...arr, i])
        }
      }
    }
    backtrace(1, [])
    return res
  };