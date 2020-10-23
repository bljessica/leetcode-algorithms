/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if(numRows === 1) {
        return s;
    }
    let len = Math.min(numRows, s.length);
    //let rows = Array.from(new Array(numRows), () => '');
    let rows = new Array(len);
    for(let i = 0; i < len; i++) {
        rows[i] = '';
    }
    let row = 0;
    let down = false;
    for(let i = 0; i < s.length; i++) {
        rows[row] += s[i];
        if(row === 0 || row === numRows - 1) {
            down = !down;
        }
        row += down? 1: -1;
    }
    let res = '';
    for(let i of rows) {
        res += i;
    }
    return res;
};