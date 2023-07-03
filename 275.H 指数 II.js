/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
    const len = citations.length
    let l = 0, r = len - 1
    while (l <= r) {
      const mid = (l + r) >> 1
      if (citations[mid] >= len - mid) r = mid - 1
      else l = mid + 1
    }
    return len - l
  };