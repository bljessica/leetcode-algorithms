/**
 * @param {string} instructions
 * @return {boolean}
 */
var isRobotBounded = function(instructions) {
    const DIRS = [[0, 1], [1, 0], [0, -1], [-1, 0]]
    const len = DIRS.length
    let x = y = 0
    let dirIdx = 0
    for (const c of instructions) {
      switch (c) {
        case 'G': {
          x += DIRS[dirIdx][0]
          y += DIRS[dirIdx][1]
          break
        }
        case 'L': {
          dirIdx = ((dirIdx - 1) % len + len) % len
          break
        }
        case 'R': {
          dirIdx = (dirIdx + 1) % len
          break
        }
      }
    }
    return dirIdx !== 0 || (x === 0 && y === 0)
  };