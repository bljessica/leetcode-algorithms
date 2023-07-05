/**
 * @param {string} queryIP
 * @return {string}
 */
var validIPAddress = function(queryIP) {
    if (isIPv4(queryIP)) return 'IPv4'
    else if (isIPv6(queryIP)) return 'IPv6'
    else return 'Neither'
  };
  
  const isIPv4 = (ip) => {
    const arr = ip.split('.')
    if (arr.length !== 4) return false
    for (const str of arr) {
      if (str.length > 3 || str.length === 0) return false
      const num = parseInt(str)
      if (isNaN(num) || getDigit(num) !== str.length || num < 0 || num > 255) {
        return false
      }
    }
    return true
  }
  
  const isIPv6 = (ip) => {
    const arr = ip.split(':')
    if (arr.length !== 8) return false
    for (const str of arr) {
      if (str.length < 1 || str.length > 4) return false
      for (const c of str) {
        if (!((c >= '0' && c <= '9') || (c >= 'a' && c <= 'f') || (c >= 'A' && c <= 'F'))) return false
      }
    }
    return true
  }
  
  const getDigit = (num) => {
    if (num === 0) return 1
    let res = 0
    while (num) {
      num = Math.floor(num / 10)
      res++
    }
    return res
  }