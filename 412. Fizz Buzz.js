/**
 * @param {number} n
 * @return {string[]}
 */
 var fizzBuzz = function(n) {
  const res = []
  for (let i = 1; i <= n; i++) {
    const rem1 = i % 3, rem2 = i % 5
    if (!rem1 && !rem2) {
      res.push('FizzBuzz')
    } else if (!rem1) {
      res.push('Fizz')
    } else if (!rem2) {
      res.push('Buzz')
    } else {
      res.push(String(i))
    }
  }
  return res
};