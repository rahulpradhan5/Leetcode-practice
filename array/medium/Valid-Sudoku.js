/*
Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

Each row must contain the digits 1-9 without repetition.
Each column must contain the digits 1-9 without repetition.
Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
Note:

A Sudoku board (partially filled) could be valid but is not necessarily solvable.
Only the filled cells need to be validated according to the mentioned rules.
*/


/**
 * @param {character[][]} board
 * @return {boolean}
 */
var board = [
    ["7", ".", ".", ".", "4", ".", ".", ".", "."],
    [".", ".", ".", "8", "6", "5", ".", ".", "."],
    [".", "1", ".", "2", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", "9", ".", ".", "."],
    [".", ".", ".", ".", "5", ".", "5", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", "2", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", "."]
]
var isValidSudoku = function (board) {

    for (var i = 0; i <= 8; i++) {
        for (var j = 0; j <= 8; j++) {
            if (board[i][j] != ".") {
                var Find = board[i].find(number => number == board[i][j]);
                if (Find == -1) {
                    console.log(board[i][j]);
                    for (var k = 1; k <= 8; k++) {
                        if (board[k][j] != ".") {
                            if (board[k][j] == board[i][j]) {
                                return false;
                            }
                        }

                    }
                }else{
                    console.log(board[i][j]);
                }
            }

        }

    }
};

console.log(isValidSudoku(board));
