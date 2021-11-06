/**
 * @param {string} text
 * @return {number}
 */
 var maxNumberOfBalloons = function(text) {
  const map = {}
  for (const c of text) {
    map[c] = map[c] === undefined ? 1 : map[c] + 1
  }
  let res = 0
  while (1) {
    if (map['b']) {
      map['b']--
      if (map['a']) {
        map['a']--
        if (map['l'] > 1) {
          map['l'] -= 2
          if (map['o'] > 1) {
            map['o'] -= 2
            if (map['n']) {
              map['n']--
              res++
            }
          }
        }
      }
    } else {
      break
    }
  }
  return res
};