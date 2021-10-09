/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} ops
 * @return {number}
 */
 var maxCount = function(m, n, ops) {
  let minRows = Math.min(m, ...ops.map(arr => arr[0]))
  let minCols = Math.min(n, ...ops.map(arr => arr[1]))
  return minRows * minCols
};