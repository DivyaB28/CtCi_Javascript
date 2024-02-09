/**
 * URLify: Write a method to replace all spaces in the string with '%20'. You may assume that the string has
 * sufficient space at the end to hold the additional characters and given the true length of the string
 * input : 'Mr John Smith    ' , 13
 * output: 'Mr%20John%20Smith'
 *
 * time : O(N)
 * additional spaceL O(1)
 */

function urlify(url, actualLength) {
  if (!url || url.length === 0) {
    return url;
  }
  let spaceCount = 0;
  for (let i = 0; i < actualLength; i++) {
    if (url[i] === " ") {
      spaceCount++;
    }
  }
  let urlArr = url.trim().split("");
  const newLength = urlArr.length - 1 + 2 * spaceCount;

  for (let i = urlArr.length - 1, j = newLength; i >= 0, j > i; i--, j--) {
    if (urlArr[i] === " ") {
      urlArr[j] = "0";
      urlArr[--j] = "2";
      urlArr[--j] = "%";
    } else {
      urlArr[j] = urlArr[i];
    }
  }
  return urlArr.join("");
}

console.log(urlify("Mr John Smith    ", 13));
