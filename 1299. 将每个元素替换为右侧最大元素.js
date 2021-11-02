/**
 * @param {number[]} arr
 * @return {number[]}
 */
 var replaceElements = function(arr) {
  const len = arr.length
  for (let i = 0; i < len; i++) {
    if (i === len - 1) {
      arr[i] = -1
    } else {
      let max = 0
      for (let j = i + 1; j < len; j++) {
        max = Math.max(max, arr[j])
      }
      arr[i] = max
    }
  }
  return arr
};