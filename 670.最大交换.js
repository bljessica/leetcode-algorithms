/**
 * @param {number} num
 * @return {number}
 */
var maximumSwap = function(num) {
    let str = num.toString()
    for (let i = 0; i < str.length; i++) {
      let maxIdx = i
      for (let j = i + 1; j < str.length; j++) {
        if (str[j] >= str[maxIdx]) maxIdx = j
      }
      if (maxIdx !== i && str[maxIdx] !== str[i]) 
        return Number(str.slice(0, i) + str[maxIdx] + str.slice(i + 1, maxIdx)
          + str[i] + str.slice(maxIdx + 1))
    }
    return num
  };