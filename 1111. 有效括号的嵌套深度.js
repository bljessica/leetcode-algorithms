/**
 * @param {string} seq
 * @return {number[]}
 */
 var maxDepthAfterSplit = function(seq) {
  let depth = 0
  return seq.split('').map(c => {
    if (c === '(') {
      depth++
      return depth & 1
    } else {
      const res = depth & 1
      depth--
      return res
    }
  })
};