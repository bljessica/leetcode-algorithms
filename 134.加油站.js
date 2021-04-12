/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
 var canCompleteCircuit = function(gas, cost) {
  const len = gas.length
  for (let i = 0; i < len; i++) {
    let step = 0
    let curGas = gas[i]
    let canArrive = true
    let curIdx = i
    while (step < len) {
      const nextIdx = (curIdx+ 1) % len
      if (curGas - cost[curIdx] < 0) {
        canArrive = false
        break
      }
      curGas = curGas - cost[curIdx] + gas[nextIdx]
      step++
      curIdx = (curIdx+ 1) % len
    }
    if (canArrive) {
      return i
    }
  }
  return -1
};