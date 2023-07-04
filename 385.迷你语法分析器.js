/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * function NestedInteger() {
 *
 *     Return true if this NestedInteger holds a single integer, rather than a nested list.
 *     @return {boolean}
 *     this.isInteger = function() {
 *         ...
 *     };
 *
 *     Return the single integer that this NestedInteger holds, if it holds a single integer
 *     Return null if this NestedInteger holds a nested list
 *     @return {integer}
 *     this.getInteger = function() {
 *         ...
 *     };
 *
 *     Set this NestedInteger to hold a single integer equal to value.
 *     @return {void}
 *     this.setInteger = function(value) {
 *         ...
 *     };
 *
 *     Set this NestedInteger to hold a nested list and adds a nested integer elem to it.
 *     @return {void}
 *     this.add = function(elem) {
 *         ...
 *     };
 *
 *     Return the nested list that this NestedInteger holds, if it holds a nested list
 *     Return null if this NestedInteger holds a single integer
 *     @return {NestedInteger[]}
 *     this.getList = function() {
 *         ...
 *     };
 * };
 */
/**
 * @param {string} s
 * @return {NestedInteger}
 */
var deserialize = function(s) {
    let idx = 0
    const dfs = () => {
      if (s[idx] === '[') {
        const ni = new NestedInteger()
        idx++
        while (s[idx] !== ']') {
          ni.add(dfs())
          if (s[idx] === ',') idx++
        }
        idx++
        return ni
      } else {
        let isNeg = false
        if (s[idx] === '-') {
          isNeg = true
          idx++
        }
        let num = 0
        while (idx < s.length && !isNaN(s[idx])) {
          num = num * 10 + Number(s[idx++])
        }
        isNeg && (num = -num)
        return new NestedInteger(num)
      }
    }
    return dfs()
  };