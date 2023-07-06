/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    // 1.滑动窗口
    let m = s1.length, n = s2.length
    if (m > n) return false
    const cnt1 = new Array(26).fill(0)
    const cnt2 = new Array(26).fill(0)
    for (let i = 0; i < m; i++) {
      cnt1[s1[i].charCodeAt() - 'a'.charCodeAt()]++
      cnt2[s2[i].charCodeAt() - 'a'.charCodeAt()]++
    }
    if (cnt1.toString() === cnt2.toString()) return true
    for (let i = m; i < n; i++) {
      cnt2[s2[i].charCodeAt() - 'a'.charCodeAt()]++
      cnt2[s2[i - m].charCodeAt() - 'a'.charCodeAt()]--
      if (cnt1.toString() === cnt2.toString()) return true
    }
    return false
    // 2.
    // const str1 = s1.split('').sort().join('')
    // const len1 = s1.length, len2 = s2.length
    // for (let i = 0; i < len2; ) {
    //   if (str1.indexOf(s2[i]) !== -1) {
    //     let includesStr1 = true
    //     for (let j = i; j < i + len1; j++) {
    //       if (str1.indexOf(s2[j]) === -1) {
    //         i = j + 1
    //         includesStr1 = false
    //         break
    //       }
    //     }
    //     if (includesStr1) {
    //       if (s2.slice(i, i + len1).split('').sort().join('') === str1) return true
    //       i++
    //     }
    //   } else {
    //     i++
    //   }
    // }
    // return false
  };