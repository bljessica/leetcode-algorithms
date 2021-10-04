/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
 var canConstruct = function(ransomNote, magazine) {
  const len1 = ransomNote.length, len2 = magazine.length
  if (len1 > len2) {
    return false
  }
  const map = new Map()
  for (let i = 0; i < len2; i++) {
    map.set(magazine[i], (map.get(magazine[i]) || 0) + 1)
  }
  for (let j = 0; j < len1; j++) {
    const num = map.get(ransomNote[j])
    if (!num || num < 1) {
      return false
    }
    map.set(ransomNote[j], num - 1)
  }
  return true
};