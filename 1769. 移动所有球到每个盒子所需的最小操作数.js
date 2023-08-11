/**
 * @param {string} boxes
 * @return {number[]}
 */
var minOperations = function(boxes) {
    const res = []
    const len = boxes.length
    for (let i = 0; i < len; i++) {
      let cnt = 0
      for (let j = 0; j < len; j++) {
        if (i === j) continue
        if (boxes[j] === '1') cnt += Math.abs(j - i)
      }
      res.push(cnt)
    }
    return res
  };