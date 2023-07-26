/**
 * @param {number} label
 * @return {number[]}
 */
var pathInZigZagTree = function(label) {
    let level = 0, cur = 1, isOdd = true
    const arr = []
    while (true) {
      const num = 2 ** level
      for (let i = 0; i < num; i++) {
        isOdd ? arr.push(cur + i) : arr.push(cur + num - 1 - i)
      }
      isOdd = !isOdd
      level++
      cur += num
      if (cur > label) break
    }
    let idx = arr.indexOf(label)
    const res = [label]
    while(idx) {
      const preIdx = (idx & 1) ? (idx - 1) / 2 : (idx - 2) / 2
      res.push(arr[preIdx])
      idx = preIdx
    }
    return res.reverse()
  };