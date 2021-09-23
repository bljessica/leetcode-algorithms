/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
 var reverseString = function(s) {
  const totalLen = s.length
  const halfLen = Math.floor(totalLen / 2)
  for (let i = 0; i < halfLen; i++) {
    const tmp = s[i]
    s[i] = s[totalLen - 1 - i]
    s[totalLen - 1 - i] = tmp
  }
};