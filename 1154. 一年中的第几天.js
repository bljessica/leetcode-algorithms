/**
 * @param {string} date
 * @return {number}
 */
var dayOfYear = function(date) {
    const days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    let res = 0
    const arr = date.split('-').map(v => parseInt(v))
    for (let i = 0; i < arr[1] - 1; i++) {
      res += days[i]
    }
    res += arr[2] + (isLeapYear(arr[0]) && arr[1] > 2 ? 1 : 0)
    return res
  };
  
  const isLeapYear = (year) => {
    if (year % 400 === 0) return true
    if (year % 4 === 0 && year % 100 !== 0) return true
    return false
  }