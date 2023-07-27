/**
 * @param {string[]} arr
 * @return {number}
 */
var maxLength = function(arr) {
    const masks = []
    for (const s of arr) {
      let mask = 0
      for (const c of s) {
        const n = c.charCodeAt() - 'a'.charCodeAt()
        if ((mask >> n) & 1) {
          mask = 0
          break
        }
        mask |= 1 << n
      }
      if (mask) masks.push(mask)
    }
    let res = 0
    const backtrace = (pos, mask) => {
      if (pos === masks.length) {
        res = Math.max(res, mask.toString(2).split('0').join('').length)
        return
      }
      if ((masks[pos] & mask) === 0) {
        backtrace(pos + 1, masks[pos] | mask)
      }
      backtrace(pos + 1, mask)
    }
    backtrace(0, 0)
    return res
  };