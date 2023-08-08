/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
var countStudents = function(students, sandwiches) {
    while (sandwiches.length) {
      const san = sandwiches[0]
      let count = 0
      const stuNum = students.length
      while (students[0] !== san) {
        students.push(students.shift())
        count++
        if (count === stuNum) return stuNum
      }
      sandwiches.shift()
      students.shift()
    }
    return 0
  };