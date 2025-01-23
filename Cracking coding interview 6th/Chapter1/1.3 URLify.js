/**
 * @description
 * Write a method to replace all spaces in a string with '%20'.
 * You may assume that the string has sufficient space
 * at the end to hold the additional characters,
 * and that you are given the "true" length of the string.
 *
 */

/**
 * @example
 * Input: "Mr John Smith     ", 13
 * Output: ""
 */

function urlify(str) {
  const trimmedStr = str.trim();
  console.log(trimmedStr);

  const test = trimmedStr.replaceAll(" ", "%20");
  console.log(test);
}

urlify("Mr John Smith     ");
