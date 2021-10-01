/**
 * @param {string[][]} paths
 * @return {string}
 */
 var destCity = function(paths) {
  const set = new Set()
  // 所有起点
  for (let path of paths) {
    set.add(path[0])
  }
  // 未作为起点的终点即为所求
  for (let path of paths) {
    if (!set.has(path[1])) {
      return path[1]
    }
  }
};