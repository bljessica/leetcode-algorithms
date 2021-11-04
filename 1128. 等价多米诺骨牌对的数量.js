/**
 * @param {number[][]} dominoes
 * @return {number}
 */
 var numEquivDominoPairs = function(dominoes) {
  let res = 0
  const len = dominoes.length
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      if ((dominoes[i][0] === dominoes[j][0] && dominoes[i][1] === dominoes[j][1])
        || (dominoes[i][0] === dominoes[j][1] && dominoes[i][1] === dominoes[j][0])) {
          res++
        }
    }
  }
  return res
};