/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    const len = flowerbed.length
    for (let i = 0; i < len; i++) {
      if (flowerbed[i] === 0) {
        if ((i === 0 || flowerbed[i - 1] === 0) 
          && (i === len - 1 || flowerbed[i + 1] === 0)) {
            flowerbed[i] = 1
            n--
          }
      }
    }
    return n <= 0
  };