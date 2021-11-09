/**
 * @param {number[]} arr
 * @return {boolean}
 */
 var checkIfExist = function(arr) {
  const map = {}
  for (let i = 0; i < arr.length; i++) {
    map[arr[i]] = i
  } 
  for (let i = 0; i < arr.length; i++) {
    if (map[arr[i] * 2] !== undefined && map[arr[i] * 2] !== i) {
      return true
    }
  }     
  return false                                                                       
};