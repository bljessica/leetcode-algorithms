/**
 * @param {number[]} score
 * @return {string[]}
 */
 var findRelativeRanks = function(score) {
  const arr = score.slice()
  const map = {}
  arr.sort((a, b) => (b - a))
  arr.forEach((item, idx) => {
    if (idx === 0) {
      map[item] = 'Gold Medal'
    } else if (idx === 1) {
      map[item] = 'Silver Medal'
    } else if (idx === 2) {
      map[item] = 'Bronze Medal'
    } else {
      map[item] = String(idx + 1)
    }
  })
  for (let i = 0; i < score.length; i++) {
    score[i] = map[score[i]]
  }
  return score
};