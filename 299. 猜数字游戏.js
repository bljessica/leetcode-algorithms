/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
 var getHint = function(secret, guess) {
  let aNum = 0, bNum = 0
  const len = secret.length
  const aMap = {}, bMap = {}
  for (let i = 0; i < len; i++) {
    if (secret[i] === guess[i]) {
      aNum++
    } else {
      aMap[secret[i]] = aMap[secret[i]] === undefined ? 1 : aMap[secret[i]] + 1
      bMap[guess[i]] = bMap[guess[i]] === undefined ? 1 : bMap[guess[i]] + 1
    }
  }
  Object.entries(bMap).forEach(data => {
    const min = Math.min(data[1], aMap[data[0]] || 0)
    bNum += min
    bMap[data[0]] -= min
    aMap[data[0]] -= min
  })
  return aNum + 'A' + bNum + 'B'
};