// Write a method to replace all spaces in a string with %20. You may assume that the string
// has sufficient space at the end to hold the additional characters and that you are given
// the true length of the string. Perform the operation in-place.

function URLify(str, len) {
    for (let i = 0; i < str.length; ++i) {
        if (str[i] === " ") {
            // Insert %20 and move string back
        }
    }
    return;
}

// Test Cases:
console.log(URLify("Mr John Smith      ", 13)) // Mr%20John%20Smith
console.log(URLify("April Polubiec   ", 14)) // April%20Polubiec
console.log(URLify("How are you      ", 11)) // How%20are%20you
console.log(URLify("Testing", 7)) // Testing