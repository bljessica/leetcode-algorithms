/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
 var licenseKeyFormatting = function(s, k) {
  const str = s.split('-').join('')
  let idx = str.length % k
  let num = Math.floor(str.length / k)
  const res = []
  if (idx) {
    res.push(str.substring(0, idx).toUpperCase())
  }
  for (let i = 0; i < num; i++) {
    res.push(str.substring(idx, idx + k).toUpperCase())
    idx += k
  }
  return res.join('-')
};