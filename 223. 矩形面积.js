/**
 * @param {number} ax1
 * @param {number} ay1
 * @param {number} ax2
 * @param {number} ay2
 * @param {number} bx1
 * @param {number} by1
 * @param {number} bx2
 * @param {number} by2
 * @return {number}
 */
 var computeArea = function(ax1, ay1, ax2, ay2, bx1, by1, bx2, by2) {
  const s1 = (ax2 - ax1) * (ay2 - ay1)
  const s2 = (bx2 - bx1) * (by2 - by1)
  const overlapWidth = Math.min(ax2, bx2) - Math.max(ax1, bx1)
  const overlapHeight = Math.min(ay2, by2) - Math.max(ay1, by1)
  const overlapS = Math.max(overlapWidth, 0) * Math.max(overlapHeight, 0)
  return s1 + s2 - overlapS
};