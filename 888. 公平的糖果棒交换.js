/**
 * @param {number[]} aliceSizes
 * @param {number[]} bobSizes
 * @return {number[]}
 */
 var fairCandySwap = function(aliceSizes, bobSizes) {
  const sum1 = aliceSizes.reduce((res, cur) => res + cur, 0)
  const sum2 = bobSizes.reduce((res, cur) => res + cur, 0)
  for (let i = 0; i < aliceSizes.length; i++) {
    const a = aliceSizes[i]
    for (let j = 0; j < bobSizes.length; j++) {
      const b = bobSizes[j]
      if (sum1 - a + b === sum2 - b + a) {
        return [a, b]
      }
    }
  }
};