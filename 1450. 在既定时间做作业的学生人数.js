/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number} queryTime
 * @return {number}
 */
 var busyStudent = function(startTime, endTime, queryTime) {
  let res = 0
  const len = startTime.length
  for (let i = 0; i < len; i++) {
    if (startTime[i] <= queryTime && endTime[i] >= queryTime) {
      res++
    }
  }
  return res
};