/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
    const inDegreeArr = new Array(numCourses).fill(0)
    for (const courses of prerequisites) {
      inDegreeArr[courses[0]]++
    }
    const zeroIngreeQueue = []
    for (let i = 0; i < numCourses; i++) {
      if (!inDegreeArr[i]) zeroIngreeQueue.push(i)
    }
    const res = []
    while (zeroIngreeQueue.length) {
      const course = zeroIngreeQueue.shift()
      res.push(course)
      for (const courses of prerequisites) {
        if (courses[1] === course) {
          inDegreeArr[courses[0]]--
          if (!inDegreeArr[courses[0]]) {
            zeroIngreeQueue.push(courses[0])
          }
        }
      }
    }
    return res.length === numCourses ? res : []
  };