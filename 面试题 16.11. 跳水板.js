/**
 * @param {number} shorter
 * @param {number} longer
 * @param {number} k
 * @return {number[]}
 */
 var divingBoard = function(shorter, longer, k) {
  if (k === 0) {
    return []
  }
  const set = new Set()
  for (let i = 0; i <= k; i++) {
    set.add(shorter * i + longer * (k - i))
  }
  return Array.from(set).sort((a, b) => a - b)
};