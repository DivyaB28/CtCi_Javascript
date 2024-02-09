/**
 * One Way: Given two string check if they are one edit away. THere are 3 types of edit :
 * insert a char, delete a char and replace a char
 *
 */

/**
 * Scan through both strings's at the same time, when a difference is
 * encountered:
 *   * if this is the first edit:
 *     * if strings are the same length then consider it a replacement
 *     * if strings are different lengths then consider it a delete from the longer string
 *   * if this is the second edit then return false
 *
 * N = max(|str1|, |str2|)
 * Time: O(N)
 * Additional space: O(1)
 *
 * @param  {string}  str1 The first string
 * @param  {string}  str2 The second string
 * @return {boolean}      True if strings are 0 or 1 edit apart, otherwise false
 */

function isOneorLessAway(str1, str2) {
  if (Math.abs(str1.length - str2.length) > 1) {
    return false;
  }
  let isEdited = false;
  for (let i = 0, j = 0; i < str1.length, j < str2.length; i++, j++) {
    if (str1[i] !== str2[j]) {
      if (isEdited) {
        //second edit
        return false;
      }

      if (str1.length > str2.length) {
        j--;
      }
      if (str1.length < str2.length) {
        i--;
      }
      isEdited = true;
    }
  }
  return true;
}

console.log(isOneorLessAway("pale", "ple"), true);
console.log(isOneorLessAway("pale", "pales"), true);
console.log(isOneorLessAway("pale", "bale"), true);
console.log(isOneorLessAway("pale", "bake"), false);
