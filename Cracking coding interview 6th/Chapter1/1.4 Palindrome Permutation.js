/**
 * @description
 * Given a string, write a function to check if it is a permutation of a palindrome. A palindrome is a word or phrase that is the same forwards and backwards. A permutation is a rearrangement of letters.
 * The palindrome does not need to be limited to just dictionary words.
 * You can ignore casing and non-letter characters.
 */

/**
 * @example
 * Input: Tact Coa
 * Output: True (Permutations: "taco cat", "atco cta", etc....)
 */

function palindromePermutation(str) {
  str = str.toLowerCase().replace(/[^a-z]+/g, "");

  const strCount = Array(26).fill(0);
  const aCharCodeAt = "a".charCodeAt(0);

  for (let i = 0; i < str.length; i++) {
    strCount[str.charCodeAt(i) - aCharCodeAt]++;
  }

  let result = 0;
  strCount.forEach((item) => {
    if (item % 2 === 0) {
      return;
    }

    result++;
  });
  return result > 1 ? false : true;
}

console.log(palindromePermutation("Tact Coa"));
