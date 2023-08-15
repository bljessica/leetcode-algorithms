/**
 * @param {number[]} security
 * @param {number} time
 * @return {number[]}
 */
var goodDaysToRobBank = function(security, time) {
    const res = []
    const len = security.length
    for (let i = time; i < len - time; i++) {
      if (isGoodDate(security, time, i)) res.push(i)
    }
    return res
  };
  
  const isGoodDate = (security, time, idx) => {
    for (let i = idx - time; i < idx; i++) {
      if (security[i] < security[i + 1]) return false
    }
    for (let i = idx; i < idx + time; i++) {
      if (security[i] > security[i + 1]) return false
    }
    return true
  }