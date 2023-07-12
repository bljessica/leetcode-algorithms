/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {
    let i = 0
    while (i + 1 < asteroids.length) {
      if (i < 0) i = 0
      while (i + 1 < asteroids.length && !(asteroids[i] > 0 && asteroids[i + 1] < 0)) i++
      if (i + 1 >= asteroids.length) break
      const a1 = Math.abs(asteroids[i]), a2 = Math.abs(asteroids[i + 1])
      if (a1 === a2) {
        asteroids[i] = (asteroids[i] / a1) * a1
        asteroids.splice(i, 2)
      } else {
        if (a1 < a2) {
          asteroids[i] = asteroids[i + 1]
        }
        asteroids.splice(i + 1, 1)
      }
      i--
    }
    return asteroids
  };