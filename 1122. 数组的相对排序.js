/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
    return arr1.sort((a, b) => {
      const idx1 = arr2.indexOf(a), idx2 = arr2.indexOf(b)
      if (idx1 === -1 && idx2 === -1) return a - b
      else if (idx1 === -1 && idx2 !== -1) return 1
      else if (idx1 !== -1 && idx2 === -1) return -1
      else return idx1 - idx2
    })
  };