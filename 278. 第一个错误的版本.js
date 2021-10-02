/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
 var solution = function(isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function(n) {
    let left = 1, right = n
    while (left <= right) {
      let mid = Math.floor((left + right) / 2)
      const isBad = isBadVersion(mid)
      if (isBad) {
        if (mid === 1) {
          return 1
        }
        if (!isBadVersion(mid - 1)) {
          return mid
        } else {
          right = mid - 1
        }
      } else {
        left = mid + 1
      }
    }
    return 1
  };
};