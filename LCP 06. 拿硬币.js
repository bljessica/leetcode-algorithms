/**
 * @param {number[]} coins
 * @return {number}
 */
 var minCount = function(coins) {
  let res = 0
  coins.forEach(coin => {
    res += Math.ceil(coin / 2)
  })    
  return res
};