/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
    const len = citations.length
    citations.sort((a, b) => a - b)
    let h = 0, i = len - 1
    while (i >= 0 && citations[i] > h) {
      h++
      i--
    }
    return h
    // citations.sort((a, b) => b - a)
    // for (let i = citations[0]; i >= 0; i--) {
    //   const overIdx = citations.findIndex(c => c < i)
    //   const overNum = overIdx === -1 ? len : overIdx
    //   if (overNum < i) continue
    //   const isLeftOverH = citations.slice(i).some(c => c > i)
    //   if (!isLeftOverH) return i
    // }
    // return 0
  };