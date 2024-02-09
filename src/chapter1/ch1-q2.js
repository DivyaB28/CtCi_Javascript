/**
 * Given two strings, write a method to find if one is a permutation of other
 */
/**
 * Sort both strings and check if they are equal afterwards. Permutations will
 * be identical sorted strings.
 *
 * N = |str1| && M = |str2|
 * Time: O(N lg N + M lg M)
 * Additional space: O(1) if able to modify original strings, O(N + M) otherwise
 * @param {*} str1
 * @param {*} str2
 * @returns
 */
function isPermuatation(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  const sortedStr1 = [...str1].sort().join("");
  const sortedStr2 = [...str2].sort().join("");
  //str1.every((v, i) => v === str2[i])
  return sortedStr1 === sortedStr2;
}

console.log(isPermuatation("aab", "aba"), true);
console.log(isPermuatation("aaba", "aba"), false);
console.log(isPermuatation("aab", "baa"), true);

/**
 * Keep track of characters counts with a Map data structure, fail when
 * str2 has a character different to str2 or if any characters are left over
 * at the end.
 *
 * N = |str1| && M = |str2|
 * Time: O(N + M)
 * Additional space: O(N)
 * @param {*} str1
 * @param {*} str2
 * @returns
 */
function isPermuatationMap(str1, str2) {
  if (str1.length === 0 || str1.length !== str2.length) {
    return false;
  }
  let chars = new Map();

  for (let i = 0; i < str1.length; i++) {
    chars.set(str1[i], chars.get(str1[i]) + 1 || 1);
  }

  for (let i = 0; i < str2.length; i++) {
    const count = chars.get(str2[i]);
    if (count === 0) {
      return false;
    } else if (count === 1) {
      chars.delete(str2[i]);
    } else {
      chars.set(str2[i], count - 1);
    }
  }
  return chars.size === 0;
}

console.log(isPermuatationMap("abcdefghi", "ihgfedcba"), true);
console.log(isPermuatationMap("1a1", "11"), false);
