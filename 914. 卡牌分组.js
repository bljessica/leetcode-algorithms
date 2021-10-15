/**
 * @param {number[]} deck
 * @return {boolean}
 */
 var hasGroupsSizeX = function(deck) {
  let map = {}
  deck.forEach(num => {
    const key = String(num)
    map[key] = map[key] ? map[key] + 1 : 1
  })
  let min = Number.MAX_SAFE_INTEGER
  const values = Object.values(map)
  values.forEach(num => {
    min = Math.min(min, num)
  })
  if (min < 2) {
    return false
  }
  for (let i = 2; i <= min; i++) {
    if (values.every(val => val % i === 0)) {
      return true
    }
  }
  return false
};