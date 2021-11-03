/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
 var numWaterBottles = function(numBottles, numExchange) {
  let res = numBottles
  while (numBottles >= numExchange) {
    const newNum = Math.floor(numBottles / numExchange)
    numBottles = (numBottles % numExchange) + newNum
    res += newNum
  }
  return res
};