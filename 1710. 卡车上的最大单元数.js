/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
var maximumUnits = function(boxTypes, truckSize) {
    boxTypes.sort(([num1, perNum1], [num2, perNum2]) => perNum2 - perNum1)
    let res = 0
    for (const [num, perNum] of boxTypes) {
      if (!truckSize) break
      const curNum = Math.min(num, truckSize)
      res += curNum * perNum
      truckSize -= curNum
    }
    return res
  };