/**
 * @param {number[]} salary
 * @return {number}
 */
 var average = function(salary) {
  salary.sort((a, b) => a - b)
  const len = salary.length
  const sum = salary.reduce((res, cur) => res + cur, 0) - salary[0] - salary[len - 1]
  return sum / (len - 2)
};