/**
 * @param {number} n
 * @return {boolean}
 */
 var canWinNim = function(n) {
  // 如果剩下的是4的倍数，就会输
  return n % 4 !== 0
};