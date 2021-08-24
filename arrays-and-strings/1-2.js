// Given two strings, write a method to decide if one is a permutation of another.

// Questions to ask:
// 1. Case sensitive?
// 2. White space matter?
function isPermutation(str1, str2) {
    if (str1.length < 1 || str2.length < 1) {
        throw new Error("Strings must have at least one character")
    }

    if (str1.length !== str2.length) {
        return false;
    }

    // SOLUTION 1
    // Time: O(A + B) Space: O(A)
//    var found = {}
//    for (let i = 0; i < str1.length; ++i) { // O(A)
//        let current_char = str1[i];
//        if (!found[current_char]) found[current_char] = 1;
//        else found[current_char]++
//    }

//    for (let j = 0; j < str2.length; ++j) { // O(B)
//        var current_char = str2[j];
//         if (!found[current_char]) { //str2 has a char that str1 does not
//             return false; 
//         } else {
//             found[current_char] = found[current_char] - 1;
//         }
//         if (found[current_char] <= 0) {
//             delete found[current_char];
//         }
//     }

//     return Object.keys(found).length === 0;

    // SOLUTION 2
    // Time: O(nlogn) Space: O(1) - But very readable!
    const sorted_1 = str1.split("").sort().join()
    const sorted_2 = str2.split("").sort().join()
    return sorted_1 === sorted_2
}

// Test Cases:
console.log(isPermutation("abcdef", "fedcba")) // True
console.log(isPermutation("alpha", "plhaa")) // True
console.log(isPermutation("a", "a")) // True
console.log(isPermutation("glass", "lass")) // False
console.log(isPermutation("love", "glove")) // False
console.log(isPermutation("", "")) // Error
console.log(isPermutation("", "hello")) // Error