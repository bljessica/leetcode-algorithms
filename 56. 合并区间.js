/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
 var merge = function(intervals) {
  intervals.sort((a, b) => a[0] - b[0])
  const res = [intervals[0]]
  for (let i = 1; i < intervals.length; i++) {
    if (res[res.length - 1][1] < intervals[i][0]) { // 不重叠
      res.push(intervals[i])
    } else {
      res[res.length - 1] = [Math.min(res[res.length - 1][0], intervals[i][0]), 
        Math.max(res[res.length - 1][1], intervals[i][1])]
    }
  }
  return res
};