/**
 * @param {number[]} guess
 * @param {number[]} answer
 * @return {number}
 */
 var game = function(guess, answer) {
  let res = 0
  let len = guess.length
  for (let i = 0; i < len; i++) {
    if (guess[i] === answer[i]) {
      res++
    }
  }
  return res
};