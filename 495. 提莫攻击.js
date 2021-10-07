/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
 var findPoisonedDuration = function(timeSeries, duration) {
  let res = 0
  const maxIdx = timeSeries.length - 1
  timeSeries.forEach((time, idx) => {
    if (idx < maxIdx && timeSeries[idx + 1] < time + duration) {
      res += timeSeries[idx + 1] - time
    } else {
      res += duration
    }
  })
  return res
};