/**
 * IsUnique: Implement an algorithm to determine if given string has all unique characters.
 *
 * @param {string} String[] to check, passed in as a character array
 * @return {boolean}  True if unique characters, otherwise false
 *
 * Time: O(N)
 * Space: O(N)
 */

export function hasUniqueCharacters(str) {
  const chars = new Set();

  for (let i = 0; i < str.length; i++) {
    if (chars.has(str[i])) {
      return false;
    }
    chars.add(str[i]);
  }
  return true;
}

/**
 *
 * Time: O(N lg N)
 * Additional space: O(1)
 * @param {*} str
 * @returns
 */

export function hasUniqueCharacterSort(str) {
  [...str].sort();

  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i - 1]) {
      return false;
    }
  }
  return true;
}

function everyCharIsUnique(str, indexOffset = "a".charCodeAt()) {
  let counterTable = Number();
  for (let index of [...str].map((c) => c.charCodeAt() - indexOffset)) {
    const mask = 1 << index; //bitwise left shift
    if (mask & counterTable) {
      return false;
    }
    counterTable |= mask;
  }
  return true;
}

function everyCharUnique(str) {
  let obj = {};
  for (let i = 0; i < str.length; i++) {
    if (obj[str[i]] && obj[str[i]] >= 1) {
      return false;
    } else {
      obj[str[i]] = 1;
    }
  }

  return true;
}

console.log(hasUniqueCharacters("abhjsui"), true);
console.log(hasUniqueCharacters("abhjsuiiii"), false);
console.log(hasUniqueCharacterSort("abhjsuiiii"), false);
console.log(hasUniqueCharacterSort("abhjsui"), true);
console.log(everyCharIsUnique("abhjsui"), true);
console.log(everyCharUnique("abcabc"), false);
