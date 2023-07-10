/**
 * @param {string} equation
 * @return {string}
 */
var solveEquation = function(equation) {
    equation += '+'
    let xNum = 0, rightNum = 0, isLeft = true, curStr = '', isPrevPos = true
    for (const c of equation) {
      if (c == '+' || c == '-' || c == '=') {
        if (isNaN(curStr)) { // x
          const idx = curStr.indexOf('x')
          let num = isPrevPos ? 1 : -1
          if (idx !== 0) num = isPrevPos ? Number(curStr.slice(0, idx)) : -Number(curStr.slice(0, idx))
          if (isLeft) xNum += num
          else xNum -= num 
        } else { // 数字
          const num = isPrevPos ? Number(curStr) : -Number(curStr) 
          if (isLeft) rightNum -= num
          else rightNum += num 
        }
        if (c == '=') isLeft = false
        if (c == '-') isPrevPos = false
        else isPrevPos = true
        curStr = ''
      } else {
        curStr += c
      }
    }
    if (xNum === 0) {
      if (rightNum === 0) return 'Infinite solutions'
      else return 'No solution'
    }
    return 'x=' + (rightNum / xNum)
  };