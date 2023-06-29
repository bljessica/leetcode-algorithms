/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    if (!intervals.length) return [newInterval]
    const [newL, newR] = newInterval
    let hasSet = false, insertIdx = 0
    for (let i = 0; i < intervals.length; i++) {
      const [l, r] = intervals[i]
      if (newR >= l && newL <= r) {
        intervals[i][0] = Math.min(l, newL)
        intervals[i][1] = Math.max(r, newR)
        hasSet = true
        break
      }
      if (l > newR) {
        insertIdx = i
        break
      }
    }
    if (hasSet) { // 合并重叠区间
      let len = intervals.length, i = 1
      while (i < len) {
        const [preL, preR] = intervals[i - 1]
        const [curL, curR] = intervals[i]
        if (curL <= preR) {
          intervals[i - 1][0] = Math.min(preL, curL)
          intervals[i - 1][1] = Math.max(preR, curR)
          intervals.splice(i, 1)
          len--
        } else {
          i++
        }
      }
    } else {
      const len = intervals.length
      if (newInterval[0] > intervals[len - 1][1]) insertIdx = len
      intervals.splice(insertIdx, 0, newInterval)
    }
    return intervals
  };