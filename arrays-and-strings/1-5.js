/** There are three types of edits that can be performed on strings:
 * 1. insert a character
 * 2. remove a character
 * 3. replace a character
 * Given two strings, write a function to check if they are one edit (or
 * zero edits) away.
 */

//TIME: O(A + B)
//SPACE: O(A + B)
function oneAway(str1, str2) {
  
  if (Math.abs(str2.length - str1.length) >= 2) {
    return false;
  }

  var chars_seen = new Map();
  for (const char of str1) {
    if (chars_seen.has(char)) {
      chars_seen.set(char, chars_seen.get(char) + 1);
    } else {
      chars_seen.set(char, 1);
    }
  }

  for (const char of str2) {
    if (chars_seen.get(char) === 1) {
      chars_seen.delete(char)
    } else {
      chars_seen.set(char, 1);
    }
  }
  return chars_seen.size <= 2;
}

console.log(oneAway("pale", "ple")); // true
console.log(oneAway("pales", "pale")); // true
console.log(oneAway("pale", "bale")); // true
console.log(oneAway("pale", "bake")); // false
console.log(oneAway("pale", "bakers")); // false


// if one string has one more letter than the other or
// one different letter from the other
