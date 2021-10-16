/**
 * Definition for Employee.
 * function Employee(id, importance, subordinates) {
 *     this.id = id;
 *     this.importance = importance;
 *     this.subordinates = subordinates;
 * }
 */

/**
 * @param {Employee[]} employees
 * @param {number} id
 * @return {number}
 */
 var GetImportance = function(employees, id) {
  const employee = employees.find(em => em.id === id)
  const ids = employee.subordinates
  let res = employee.importance
  employees.forEach(em => {
    if (ids.includes(em.id)) {
      res += em.importance
      if (em.subordinates.length) {
        res -= em.importance
        res += GetImportance(employees, em.id)
      }
    }
  })
  return res
};