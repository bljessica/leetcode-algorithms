/**
 * @param {number} columnNumber
 * @return {string}
 */
 var convertToTitle = function(columnNumber) {
  const arr = []
  while (columnNumber) {
      const number = (columnNumber - 1) % 26 + 1
      arr.push(String.fromCharCode('A'.charCodeAt() + number - 1))
      columnNumber = Math.floor((columnNumber - number) / 26)
  }
  return arr.reverse().join('')
};