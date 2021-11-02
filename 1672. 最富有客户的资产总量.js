/**
 * @param {number[][]} accounts
 * @return {number}
 */
 var maximumWealth = function(accounts) {
  const customers = accounts.map(property => {
    return property.reduce((res, cur) => res + cur, 0)
  })
  return Math.max(...customers)
};