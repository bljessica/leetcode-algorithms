/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function(s) {
    return s.split(' ').sort((a, b) => {
      return parseInt(a[a.length - 1]) - parseInt(b[b.length - 1])
    }).map(str => str.substr(0, str.length - 1)).join(' ')
  };