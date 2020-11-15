/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    //三个方向判重
    let rows = {}
    let columns = {}
    let boxes = {}
    for(let i = 0; i < 9; i++) {
        for(let j = 0; j < 9; j++) {
            let num = board[i][j];
            if(num !== '.') {
                //子数独序号
                let boxIdx = parseInt((i / 3)) * 3 + parseInt(j / 3);
                if(rows[i + '-' + num] || columns[j + '-' + num] || boxes[boxIdx + '-' + num]) {
                    return false;
                }
                rows[i + '-' + num] = true;
                columns[j + '-' + num] = true;
                boxes[boxIdx + '-' + num] = true;
            }
        }
    }
    return true;
};