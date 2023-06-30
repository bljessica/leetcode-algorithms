/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function(columnTitle) {
    let res = 0
    const basicCharCode = 'A'.charCodeAt()
    for (const c of columnTitle) {
      res = res * 26 + c.charCodeAt() - basicCharCode + 1
    }
    return res
  };