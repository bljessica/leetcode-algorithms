/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
 var compareVersion = function(version1, version2) {
  const arr1 = version1.split('.'), arr2 = version2.split('.')
  const len = Math.max(arr1.length, arr2.length)
  let num1 = 0, num2 = 0
  for (let i = 0; i < len; i++) {
    num1 = num1 * 10 + (arr1[i] ? Number(arr1[i]) : 0)
    num2 = num2 * 10 + (arr2[i] ? Number(arr2[i]) : 0)
  }
  if (num1 > num2) {
    return 1
  } else if (num1 === num2) {
    return 0
  } else {
    return -1
  }
};