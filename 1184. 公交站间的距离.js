/**
 * @param {number[]} distance
 * @param {number} start
 * @param {number} destination
 * @return {number}
 */
 var distanceBetweenBusStops = function(distance, start, destination) {
  let sum = distance.reduce((res, cur) => res + cur, 0)
  let s = Math.min(start, destination), e = Math.max(start, destination)
  let dis1 = 0
  for (let i = s; i < e; i++) {
    dis1 += distance[i]
  }
  return Math.min(dis1, sum - dis1)
};