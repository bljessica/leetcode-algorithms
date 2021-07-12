/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(numbers, target) {
  // 1.
  // const len = numbers.length
  // for (let i = 0; i < len; i++) {
  //     for (let j = len - 1; j > i; j--) {
  //         if (numbers[i] + numbers[j] > target) {
  //             continue
  //         } else if (numbers[i] + numbers[j] === target) {
  //             return [i + 1, j + 1]
  //         } else {
  //             break
  //         }
  //     }
  // }
  // 2.双指针
  let left = 0, right = numbers.length - 1
  while (left < right) {
      if (numbers[left] + numbers[right] === target) {
          return [left + 1, right + 1]
      } else if (numbers[left] + numbers[right] > target) {
          right--
      } else {
          left++
      }
  }
};