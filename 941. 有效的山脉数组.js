/**
 * @param {number[]} arr
 * @return {boolean}
 */
 var validMountainArray = function(arr) {
  const len = arr.length
  let i = 0, j = len - 1
  while (i + 1 < len && arr[i] < arr[i + 1]) {
    i++
  }
  while (j - 1 >= 0 && arr[j] < arr[j - 1]) {
    j--
  }
  if (i > 0 && j < len - 1 && i === j) {
    return true
  }
  return false
};