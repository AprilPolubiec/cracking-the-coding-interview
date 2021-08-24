/** Rotate Matrix
 * 
 * Given an image represented by an N x N matrix, where each pixel in the image
 * is represented by an integer, write a method to rotate the image by 90 degrees.
 * Can you do this in place?
 */

/**
 * 
 * [1, 2, 3],          [7, 4, 1],       [2][0] [1][0] [0][0]
 * [4, 5, 6],   ==>    [8, 5, 2],  ===  [2][1] [1][1] [0][1]
 * [7, 8, 9]           [9, 6, 3]        [2][2] [1][2] [0][2]
 *          
 *          
 * 
 */


// This works but could prob be better
function rotate(mat) {
    var rotated = new Array(mat.length).fill().map(() => Array(mat.length).fill()); 
    for (let i = 0; i < mat.length; ++i) {
        var y = mat.length - 1 - i;
        for (let j = 0; j < mat[i].length; ++j) {
            // [0][0] => [0][2]  [1][0] => [0][1]
            // [0][1] => [1][2]  [1][1] => [1][1]
            // [0][2] => [2][2]  [1][2] => [2][1]
            var x = j;
            rotated[x][y] = mat[i][j]
        }
    }
    return rotated
}

console.log(rotate([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]))
// Expect: 
// [7, 4, 1],
// [8, 5, 2],
// [9, 6, 3]

console.log(rotate([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
]))
// Expect: 
// [13, 9, 5, 1],
// [14, 10, 6, 2],
// [15, 11, 7, 3]
// [16, 12, 8, 4]