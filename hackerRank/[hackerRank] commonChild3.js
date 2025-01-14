/**
 * @param {string} s1
 * @param {string} s2
 * @return {number}
 */
const longestCommonSubsequenceLength = (s1, s2) => {
  function lcs(s1, s2, n, m, cache) {
    /*
     * Base Case
     *
     * lcs("", anything...) == 0 lcs(anything..., "") == 0 lcs("", "") == 0
     *
     * A subproblem where either string is empty will have a result of 0. There can
     * be nothing in common with an empty string and anything else.
     */
    if (n == 0 || m == 0) return 0;

    // Do the mapping of indexes
    const key = n + "#" + m;

    // If we have already computed this
    // It stops further recursion and stops computing same value again and again
    if (cache.has(key)) return cache.get(key);

    let result;

    var s1FinalCharacter = s1.charAt(n - 1);
    var s2FinalCharacter = s2.charAt(m - 1);

    /*
     * No competition necessary. A match. The answer to THIS subproblem is 1 PLUS
     * the best answer to the subproblem without either of these characters.
     */
    if (s1FinalCharacter === s2FinalCharacter) {
      result = lcs(s1, s2, n - 1, m - 1, cache) + 1;
    } else {
      /*
       * Character mismatch. Compete subproblems, whoever wins becomes the answer to
       * this subproblem and is hence returned
       */
      result = Math.max(
        lcs(s1, s2, n, m - 1, cache),
        lcs(s1, s2, n - 1, m, cache)
      );
    }

    // set the value of key
    cache.set(key, result);
    return result;
  }

  // Make a hashmap for memorisation in recursion
  const cache = new Map();
  return lcs(s1, s2, s1.length, s2.length, cache);
};

console.log(longestCommonSubsequenceLength("AAB", "AZB"));
