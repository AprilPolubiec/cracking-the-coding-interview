/* Given a string, write a function to check if it is a permutation of a 
palindrome. A palindrome is a word or phrase that is the same forwards as 
it is backwards. A permutation is a rearrangement of letters/ The palindrome
does not need to be limited to just dictionary words. You can ignore casing
and non-letter characters.
*/

// Time: O(n) Space: O(1)
function isPalindromePermutation(str) {
  var cleaned_string = str.replace(/[^a-z]/gi, "").toLowerCase();
  var chars_seen = new Set(); 

  for (const char of cleaned_string) {
    if (chars_seen.has(char)) {
      chars_seen.delete(char);
    } else {
      chars_seen.add(char);
    }
  }


  return chars_seen.size <= 1;

  return cleaned_string.length % 2 === 0
    ? chars_seen.size === 0
    : chars_seen.size === 1;
}

console.log(isPalindromePermutation("Tact Coa")); // True
