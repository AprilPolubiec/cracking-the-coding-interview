// Implement an algorithm to determine if a string has all unique characters. 
// What if you cannot use additional data structures?

function hasUniqueChars(str) {
    if (str.length < 1) {
        throw new Error("String must contain at least one character")
    }

    // SOLUTION 1: Brute Force Approach: O(n^2)
    // for (let i = 0; i < str.length; ++i) { 
    //     for (let j = 0; j < str.length; ++j) {
    //         if (i === j) break;
    //         if (str[j] === str[i]) {
    //             return false;
    //         }
    //     }
    // }

    // return true;

    // SOLUTION 2: Better Approach using hashmap
    // Time: O(N) Space: O(N)
    // var chars_seen = { [str[0]]: 1 }; // Hash Map where key = char, val = count
    // for (let i = 1; i < str.length; ++i) {
    //     if (chars_seen[str[i]] === 1) {
    //         return false;
    //     }
    //     else {
    //         chars_seen[str[i]] = 1;
    //     }
    // }

    // SOLUTION 3: What if you can't use additional data structures?
    // Time: O(nlogn) Space: O(1)
    str = str.split("").sort() // O(nlogn)
    for (let i = 0; i < str.length - 1; ++i) { // O(N)
        if (str[i] === str[i + 1]) return false;
    }
    return true;
}

// Test Cases:
console.log(hasUniqueChars("abcdef")) // True
console.log(hasUniqueChars("alpha")) // False
console.log(hasUniqueChars("a")) // True
console.log(hasUniqueChars("glass")) // False
console.log(hasUniqueChars("")) // Error