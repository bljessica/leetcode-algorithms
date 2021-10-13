/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
 var isLongPressedName = function(name, typed) {
  let i = 0, j = 0
  const nameLen = name.length, typedLen = typed.length
  while (i < nameLen && j < typedLen) {
    if (name[i] !== typed[j]) {
      while (j > 0 && j < typedLen && typed[j] === typed[j - 1]) {
        j++
      }
      if (j < typedLen && name[i] !== typed[j]) {
        return false
      }
    }
    i++
    j++
  }
  if (i < nameLen) {
    return false
  }
  while (j > 0 && j < typedLen && typed[j] === typed[j - 1]) {
    j++
  }
  return j === typedLen
};