/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var makeConnected = function(n, connections) {
    const len = connections.length
    if (len < n - 1) return -1
    const map = new Map()
    for (const [x, y] of connections) {
      map.get(x) ? map.get(x).push(y) : map.set(x, [y])
      map.get(y) ? map.get(y).push(x) : map.set(y, [x])
    }
    const visited = new Array(n).fill(false)
    let res = 0
    const dfs = (x) => {
      visited[x] = true
      const nodes = map.get(x)
      if (nodes) {
        for (const y of nodes) {
          if (!visited[y]) {
            dfs(y)
          }
        }
      }
    }
    for (let i = 0; i < n; i++) {
      if (!visited[i]) {
        res++
        dfs(i)
      }
    }
    return res - 1
  };