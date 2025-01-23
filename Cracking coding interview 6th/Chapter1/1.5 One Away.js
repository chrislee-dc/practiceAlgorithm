/**
 *
 * @Description
 * There are three types of edits that can be performed on strings:
 * insert a character
 * remove a character,
 * or replace a character
 *
 * Given two strings,
 * write a function to check if they are one edit (or zero edits) away.
 */

/**
 * @Example
 * pale, ple => true
 * pales, pale => true
 * pale, bale => true
 * pale, bake => false
 */

function oneAway(str1, str2) {
  const str1Count = Array(26).fill(0);
  const str2Count = Array(26).fill(0);
  const aCharCodeAt = "a".charCodeAt(0);

  for (let i = 0; i < str1.length; i++) {
    str1Count[str1.charCodeAt(i) - aCharCodeAt]++;
  }

  for (let i = 0; i < str2.length; i++) {
    str2Count[str2.charCodeAt(i) - aCharCodeAt]++;
  }

  let matches = 0;

  for (let i = 0; i < str1Count.length; i++) {
    if (str1Count[i] === str2Count[i]) {
      matches++;
    }
  }

  return matches > 23 ? true : false;
}

const a = "pale, ple".split(", ");
const b = "pales, pale".split(", ");
const c = "pale, bale".split(", ");
const d = "pale, bake".split(", ");
