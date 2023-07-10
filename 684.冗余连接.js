/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantConnection = function(edges) {
    const unionFindSet = new Array(edges.length + 1).fill(0).map((_, idx) => idx)
    for (const [n1, n2] of edges) {
      if (find(unionFindSet, n1) !== find(unionFindSet, n2)) {
        union(unionFindSet, n1, n2)
      } else return [n1, n2]
    }
  };
  
  const find = (unionFindSet, n) => {
    if (unionFindSet[n] !== n) {
      return find(unionFindSet, unionFindSet[n])
    }
    return n
  }
  
  const union = (unionFindSet, n1, n2) => {
    unionFindSet[find(unionFindSet, n1)] = find(unionFindSet, n2)
  }