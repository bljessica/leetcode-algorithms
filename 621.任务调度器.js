/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function(tasks, n) {
    const freq = _.countBy(tasks)
    const maxVal = Math.max(...Object.values(freq))
    let maxValCount = 0
    for (const val of Object.values(freq)) {
      if (val === maxVal) maxValCount++
    }
    return Math.max((maxVal - 1) * (n + 1) + maxValCount, tasks.length)
  };