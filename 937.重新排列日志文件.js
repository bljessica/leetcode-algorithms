/**
 * @param {string[]} logs
 * @return {string[]}
 */
var reorderLogFiles = function(logs) {
    logs.sort((log1, log2) => {
      const isNumLog1 = isNumLog(log1), isNumLog2 = isNumLog(log2)
      if (isNumLog1 && isNumLog2) {
        return 0
      } else if (isNumLog1 && !isNumLog2) {
        return 1
      } else if (!isNumLog1 && isNumLog2) {
        return -1
      } else if (!isNumLog1 && !isNumLog2) {
        const arr1 = log1.split(' '), arr2 = log2.split(' ')
        const contentCmp = arr1.slice(1).join(' ').localeCompare(arr2.slice(1).join(' '))
        if (contentCmp === 0) return arr1[0].localeCompare(arr2[0])
        return contentCmp
      }
    })
    return logs
  };
  
  const isNumLog = (log) => {
    const c = log[log.length - 1]
    return c >= '0' && c <= '9'
  }