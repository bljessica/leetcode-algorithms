/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function(graph) {
    const n = graph.length
    const stack = [0], res = []
    const dfs = (cur) => {
      if (cur === n - 1) {
        res.push(stack.slice())
        return
      }
      for (const next of graph[cur]) {
        stack.push(next)
        dfs(next)
        stack.pop()
      }
    }
    dfs(0)
    return res
  };