/**
 * @param {number} candies
 * @param {number} num_people
 * @return {number[]}
 */
 var distributeCandies = function(candies, num_people) {
  const res = new Array(num_people).fill(0)
  let num = 0
  while (candies > num) {
    res[(num % num_people)] += ++num
    candies -= num
  }
  res[(num % num_people)] += candies
  return res
};