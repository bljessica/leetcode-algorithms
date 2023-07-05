/**
 * @param {number} turnedOn
 * @return {string[]}
 */
var readBinaryWatch = function(turnedOn) {
    if (turnedOn > 8) return []
    const res = []
    const dfs = (curLightNum, h, m, minLightNum) => {
      if (h > 11 || m > 59) return
      if (curLightNum === turnedOn) return res.push(`${h}:${m > 9 ? m : '0' + m}`)
      for (let i = minLightNum; i < 10; i++) {
        if (i > 5) dfs(curLightNum + 1, h + Math.pow(2, i - 6), m, i + 1)
        else dfs(curLightNum + 1, h, m + Math.pow(2, i), i + 1)
      }
    }
    dfs(0, 0, 0, 0)
    return res
  };