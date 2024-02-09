/**
 * String Compression: Write a function tp perform basic string compression using counts to repeated chars.
 * eg: 'aabcccaaa' -> a2b1c3a3
 * if the compressed string wouldnot become smaller than the original string, you can return original string
 * assume string has only uppercase and lowercase letters
 */

/**
 * Takes an input string and counts contiguous sequences of the same character
 * and replaces them with XC (X = count, C = character).
 *
 * N = |str|
 * Time: O(N)
 * Additional space: O(N)
 *
 * @param  {string} str [description]
 * @return {[type]}     [description]
 */

function compressedString(str) {
  if (!str) {
    return str;
  }
  let cStr = "";
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    const start = i;
    while (i + 1 < str.length && char === str[i + 1]) {
      i++;
    }
    cStr += char + (i - start + 1);
  }
  return cStr;
}

console.log(compressedString("aabbccc"), "a2b2c3");

function copyMatrix(matrix) {
  let newMatrix = [];
  matrix.forEach((m) => newMatrix.push(m.slice(0)));
  return newMatrix;
}
let context = [
  [
    [1, 2],
    [3, 4],
  ],
  [
    [3, 1],
    [4, 2],
  ],
  [
    [4, 3],
    [2, 1],
  ],
  [
    [2, 4],
    [1, 3],
  ],
];
console.log(copyMatrix(context[context.length - 1]));
