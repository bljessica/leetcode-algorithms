/**
 * @param {number[][]} isConnected
 * @return {number}
 */
 var findCircleNum = function(isConnected) {
  const provinceNum = isConnected.length
  const isVisited = new Set()
  let num = 0
  for (let i = 0; i < provinceNum; i++) {
    if (!isVisited.has(i)) {
      dfs(isConnected, isVisited, i)
      num++
    }
  }
  return num
};

const dfs = (isConnected, isVisited, i) => {
  for (let j = 0; j < isConnected[i].length; j++) {
    if (isConnected[i][j] && !isVisited.has(j)) {
      isVisited.add(j)
      dfs(isConnected, isVisited, j)
    }
  }
}