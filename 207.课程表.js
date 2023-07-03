/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    if (prerequisites.length === 0) return true
    const inDegreeArr = new Array(numCourses).fill(0)
    // 节点入度
    for (const courses of prerequisites) 
      inDegreeArr[courses[0]]++
    const zeroInDegreeQueue = [] // 入度为0的节点队列
    for (let i = 0; i < numCourses; i++) {
      if (inDegreeArr[i] === 0) zeroInDegreeQueue.push(i)
    }
    const learned = []
    while (zeroInDegreeQueue.length) {
      const course = zeroInDegreeQueue.shift()
      learned.push(course)
      for (const courses of prerequisites) {
        if (courses[1] === course) {
          inDegreeArr[courses[0]]--
          if (inDegreeArr[courses[0]] === 0) 
            zeroInDegreeQueue.push(courses[0])
          }
      }
    }
    return learned.length === numCourses
  };