/**
 * @param {string} command
 * @return {string}
 */
 var interpret = function(command) {
  let i = 0
  const len = command.length
  let res = ''
  while (i < len) {
    if (command[i] === 'G') {
      res += 'G'
      i++
    } else if (i + 1 < len && command.slice(i, i + 2) === '()') {
      res += 'o'
      i += 2
    } else if (i + 3 < len && command.slice(i, i + 4) === '(al)') {
      res += 'al'
      i += 4
    }
  }
  return res
};