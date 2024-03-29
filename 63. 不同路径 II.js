/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
 var uniquePathsWithObstacles = function(obstacleGrid) {
  if (obstacleGrid[0][0] === 1) {
    return 0
  }
  const rows = obstacleGrid.length, cols = obstacleGrid[0].length
  const dp = new Array(rows).fill(0).map(() => new Array(cols).fill(0))
  dp[0][0] = 1
  for (let i = 1; i < rows; i++) {
    dp[i][0] = obstacleGrid[i][0] || !dp[i - 1][0] ? 0 : 1
  }
  for (let j = 1; j < cols; j++) {
    dp[0][j] = obstacleGrid[0][j] || !dp[0][j - 1] ? 0 : 1
  }
  for (let i = 1; i < rows; i++) {
    for (let j = 1; j < cols; j++) {
      dp[i][j] = obstacleGrid[i][j] ? 0 : (dp[i - 1][j] + dp[i][j - 1])
    }
  }
  return dp[rows - 1][cols - 1]
};