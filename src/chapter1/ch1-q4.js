/**
 * Palindrome Permutation:
 * write a function to check if it is a permutation of a palindrome
 * input: Tact Coa
 * output: true ("taco cat", "atco cta" etc)
 */

/**
 * Go through characters in string and set flag to indicate if there is an
 * odd number of that character. If there is more than one character with an
 * odd number of occurences then it cannot be a palindrome.
 *
 * N = |str|
 * Time: O(N)
 * Additional space: O(N)
 *
 * @param  {string[]} str String to check as a character array
 * @return {boolean}      True if input string is a permutation of a palindrome (ignoring spaces), otherwise false
 */
function isPalidromePermutationSet(str) {
  if (!str) {
    return false;
  }

  let chars = new Set();
  for (let char of str.toLowerCase()) {
    if (char !== " ") {
      if (chars.has(char)) {
        chars.delete(char);
      } else {
        chars.add(char);
      }
    }
  }
  return chars.size <= 1;
}

// TESTS
console.log(
  isPalidromePermutationSet("sasadfgsadfghjk;hjk;sadfghjk;dfghjk;"),
  "true"
);

console.log(isPalidromePermutationSet("Tact boa"), "false");
console.log(isPalidromePermutationSet("Tact Coa"), "true");
console.log(
  isPalidromePermutationSet("sa sadfgsadfgh jk;hjkz;sadfg hjk;dfghjk;"),
  "true"
);

function palinPermMap(s) {
  const sanitized = s.toUpperCase().split(" ").join("");
  const freq = new Map();
  for (let i = 0; i < sanitized.length; i++) {
    const char = sanitized.charAt(i);
    const prevFreq = freq.get(char) || 0;
    freq.set(char, prevFreq + 1);
  }
  let oddCount = 0;
  for (let char of freq) {
    if (char[1] % 2 !== 0) {
      oddCount++;
    }
  }
  return oddCount < 2;
}

console.log(palinPermMap("Tact boa"), "false");
console.log(palinPermMap("Tact Coa"), "true");
console.log(palinPermMap("sa sadfgsadfgh jk;hjkz;sadfg hjk;dfghjk;"), "true");
