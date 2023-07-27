/**
 * @param {string[]} folder
 * @return {string[]}
 */
var removeSubfolders = function(folder) {
    folder.sort()
    const res = [folder[0]]
    let pre = 0
    for (let i = 1; i < folder.length; i++) {
      const idx = folder[i].indexOf(folder[pre])
      if (idx === -1 || idx !== 0 || folder[i][folder[pre].length] !== '/') {
        res.push(folder[i])
        pre = i
      } 
    }
    return res
  };