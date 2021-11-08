/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
 var duplicateZeros = function(arr) {
  let i = arr.length - 1
  while (i >= 0) {
    if (arr[i] == 0) {
      arr.splice(i, 0, 0)
      arr.pop()
    }
    i--
  }
};