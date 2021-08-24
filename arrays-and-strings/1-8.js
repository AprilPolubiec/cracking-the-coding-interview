/** Zero Matrix
 * 
 * Write an algorithm such that if an element in an M x M matrix is 0,
 * it's entire row and column are set to 0.
 * 
 */

function zeroMatrix(mat) {
    var row, col;
    for (let i = 0; i < mat.length; ++i) {
        for (let j = 0; j < mat[i].length; ++j) {
            if (mat[i][j] === 0) {
                row = i
                col = j
            }
            if (col === j) {
                mat[i][j] = 0
            }
        }
        if (row === i) {
            mat[i] = [0, 0, 0]
        } 
    }
    return mat;
}

console.log(zeroMatrix([
    [1, 2, 3],
    [4, 5, 6],
    [0, 8, 9]
]))

/**
 * [0, 2, 3]
 * [0, 5, 6]
 * [0, 0, 0]
 */