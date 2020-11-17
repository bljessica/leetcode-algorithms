/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    function findAll(sum, arrange) {
        if(sum === target) res.push(arrange.slice());
        for(let item of candidates) {
            let last = arrange[arrange.length - 1] || 0;
            if(item >= last && item + sum <= target) {
                arrange.push(item);
                findAll(sum + item, arrange);
                arrange.pop();
            }
        }
    }
    let res = [];
    findAll(0, []);
    return res;
};