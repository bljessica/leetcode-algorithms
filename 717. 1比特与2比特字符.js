/**
 * @param {number[]} bits
 * @return {boolean}
 */
 var isOneBitCharacter = function(bits) {
  let i = 0
  const len = bits.length
  while (i < len - 1) {
    i += bits[i] + 1
  }
  return i === len - 1
};