/**
 * @param {character[]} chars
 * @return {number}
 */
 var compress = function(chars) {
  let str = ''
  chars.push('-')
  let curChar = chars[0], curNum = 1
  for (let i = 1; i < chars.length; i++) {
    if (chars[i] === chars[i - 1]) {
      curNum++
    } else {
      str += curChar
      if (curNum > 1) {
        str += curNum
      }
      curChar = chars[i]
      curNum = 1
    }
  }
  const arr = str.split('')
  for (let i = 0; i < arr.length; i++) {
    if (chars[i]) {
      chars[i] = arr[i]
    } else {
      chars.push(arr[i])
    }
  }
  return str.length
};