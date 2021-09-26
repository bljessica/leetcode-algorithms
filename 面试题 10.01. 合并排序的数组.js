/**
 * @param {number[]} A
 * @param {number} m
 * @param {number[]} B
 * @param {number} n
 * @return {void} Do not return anything, modify A in-place instead.
 */
 var merge = function(A, m, B, n) {
  const len = m + n
  let i = m - 1, j = n - 1
  for (let k = len - 1; k >= 0 && i >= 0 && j >= 0; k--) {
    if (A[i] >= B[j]) {
      A[k] = A[i--]
    } else {
      A[k] = B[j--]
    }
  }
  while (j >= 0) {
    A[j] = B[j]
    j--
  }
};