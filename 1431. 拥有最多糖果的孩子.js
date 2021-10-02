/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
 var kidsWithCandies = function(candies, extraCandies) {
  const max = Math.max(...candies)
  const res = []
  for (let candy of candies) {
    if (max <= candy + extraCandies) {
      res.push(true)
    } else {
      res.push(false)
    }
  }
  return res
};