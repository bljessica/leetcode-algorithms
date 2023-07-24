/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function(fruits) {
    const len = fruits.length
    if (len <= 2) return len
    let start = 0, j = 1, max = 0
    while (j < len && fruits[j] === fruits[start]) j++
    if (j >= len) return len
    const f = [fruits[start], fruits[j]]
    for (; j < len; j++) {
      if (f.includes(fruits[j])) max = Math.max(max, j - start + 1)
      else {
        start = j - 1
        while (start >= 0 && fruits[start] === fruits[start - 1]) start--
        f[0] = fruits[start]
        f[1] = fruits[j]
      }
    }
    return max
  };