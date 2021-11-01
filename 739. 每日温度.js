/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
 var dailyTemperatures = function(temperatures) {
  const res = []
  const len = temperatures.length
  for (let i = 0; i < len; i++) {
    let j = i + 1
    while (j < len && temperatures[i] >= temperatures[j]) {
      j++
    }
    if (j === len) {
      res.push(0)
    } else {
      res.push(j - i)
    }
  }
  return res
};