/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    let res = [];
    candidates.sort((a, b) => a - b);
    function findAll(sum, arrange, start) {
        if(sum === target) res.push(arrange);
        for(let i = start; i < candidates.length; i++) {
            let item = candidates[i];
            if(sum + item > target) break;
            if(i > start && candidates[i] === candidates[i - 1]) continue;
            findAll(sum + item, [...arrange, item], i + 1);
        }
    }
    findAll(0, [], 0)
    return res;
};