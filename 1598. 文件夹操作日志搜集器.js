/**
 * @param {string[]} logs
 * @return {number}
 */
var minOperations = function(logs) {
    let res = 0
    for (const log of logs) {
      switch (log) {
        case '../': res--; if (res < 0) res = 0; break;
        case './': break;
        default: res++;
      }
    }
    return res
  };