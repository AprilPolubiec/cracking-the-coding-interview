/** String Compression
 * Implement a method to perform basic string compression using
 * the counts of repeated characters. For example, the string
 * aabcccccaaa would become a2b1c5a3. If the "compressed" string
 * would not become smaller then the original string, your method
 * should return the original string. You can assume the string only
 * has upper and lower case letters.
 */

function compress(str) {
  var compressed = "";
  var char_count = new Map();
  for (const char of str) {
    if (char_count.size === 0) {
      char_count.set(char, 1);
    } else if (char_count.has(char)) {
      char_count.set(char, char_count.get(char) + 1);
    } else {
      compressed +=
        char_count.keys().next().value + char_count.values().next().value;
      char_count.clear();
      char_count.set(char, 1);
    }
  }
  compressed +=
    char_count.keys().next().value + char_count.values().next().value;
  return compressed.length >= str.length ? str : compressed;
}

console.log(compress("aabcccccaaa")); //a2b1c5a3
console.log(compress("abc")); //abc
