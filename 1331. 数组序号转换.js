/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function(arr) {
    const sortedArr = Array.from(new Set(arr))
    sortedArr.sort((a, b) => a - b)
    return arr.map(num => sortedArr.indexOf(num) + 1)
  };