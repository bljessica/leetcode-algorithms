/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
 var setZeroes = function(matrix) {
  const rowsLen = matrix.length
  const colsLen = matrix[0].length
  // 使用O(m + n)的额外空间
  // const zeroRows = []
  // const zeroCols = []
  // for (let i = 0; i < rowsLen; i++) {
  //   for (let j = 0; j < colsLen; j++) {
  //     if (matrix[i][j] === 0) {
  //       zeroRows.push(i)
  //       zeroCols.push(j)
  //     }
  //   }
  // }
  // for (let i = 0; i < rowsLen; i++) {
  //   for (let j = 0; j < colsLen; j++) {
  //     if (zeroRows.includes(i)) {
  //       for (let k = 0; k < colsLen; k++) {
  //         matrix[i][k] = 0
  //       }
  //     }
  //     if (zeroCols.includes(j)) {
  //       for (let k = 0; k < rowsLen; k++) {
  //         matrix[k][j] = 0
  //       }
  //     }
  //   }
  // }
  // 使用O(1)的额外空间
  let zeroFirstRow = false, zeroFirstCol = false
  for(let i = 0;i < rowsLen; i++) {
    if (matrix[i][0] === 0) {
      zeroFirstCol = true
    }
  }
  for (let j = 0; j < colsLen; j++) {
    if (matrix[0][j] === 0) {
      zeroFirstRow = true
    }
  }
  // 用第一行，第一列记录其他行列的结果(为0则需更新)
  for(let i = 1; i < rowsLen; i++) {
    for (let j = 1; j < colsLen; j++) {
      if (matrix[i][j] === 0) {
        matrix[i][0] = matrix[0][j] = 0
      }
    }
  }
  // 更新
  for(let i = 1;i < rowsLen; i++) {
    for (let j = 1; j < colsLen; j++) {
      if (matrix[0][j] === 0 || matrix[i][0] === 0) {
        matrix[i][j] = 0
      }
    }
  }
  // 更新第一行，第一列
  if (zeroFirstRow) {
    for (let k = 0; k < colsLen; k++) {
      matrix[0][k] = 0
    }
  }
  if (zeroFirstCol) {
    for (let k = 0; k < rowsLen; k++) {
      matrix[k][0] = 0
    }
  }
};