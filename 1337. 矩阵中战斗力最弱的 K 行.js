/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
var kWeakestRows = function(mat, k) {
    const idxArr = new Array(mat.length).fill(0).map((_, i) => i)
    return idxArr.sort((idx1, idx2) => {
      return mat[idx1].filter(v => v).length - mat[idx2].filter(v => v).length
    }).slice(0, k)
  };