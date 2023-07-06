/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var complexNumberMultiply = function(num1, num2) {
    const [x1, y1] = parseNumStr(num1)
    const [x2, y2] = parseNumStr(num2)
    const n1 = x1 * x2 - y1 * y2
    const n2 = x1 * y2 + y1 * x2
    return `${n1}+${n2}i`
  };
  
  const parseNumStr = (str) => {
    const arr = str.split('+')
    return [parseInt(arr[0]), parseInt(arr[1].slice(0, arr[1].length - 1))]
  }