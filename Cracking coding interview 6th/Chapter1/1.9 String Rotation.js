/**
 * Assume you have a method isSubstring which checks if one word is a substring of another.
 * Given two strings, s1 and s2, write code to check if s2 is a rotation of s1 using only one call
 * to isSubstring (EX, "waterbottle" is a rotation of "erbottlewat")
 */

function stringRotation(s1, s2) {
  if (s1.length !== s2.length) {
    return false;
  }

  const s1Count = Array(26).fill(0);
  const s2Count = Array(26).fill(0);
  const aCharCodeAt = "a".charCodeAt(0);

  for (let i = 0; i < s1.length; i++) {
    s1Count[s1.charCodeAt(i) - aCharCodeAt]++;
    s2Count[s2.charCodeAt(i) - aCharCodeAt]++;
  }

  for (let i = 0; i < s1Count.length; i++) {
    if (s1Count[i] !== s2Count[i]) {
      return false;
    }
  }

  return true;
}

const s1 = "waterbottle";
const s2 = "erbottlewat";
