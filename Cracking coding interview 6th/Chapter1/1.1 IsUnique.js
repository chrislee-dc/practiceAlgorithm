/**
 * Is Unique: implement an algorithm to determine if a string has all unique characters. what if you cannot use additional data structures?
 *
 */

function isUnique(str) {
  for (let ai = 0; ai < str.length - 1; ai++) {
    for (let bi = ai + 1; bi < str.length; bi++) {
      if (str[ai] === str[bi]) {
        return false;
      }
    }
  }
  return true;
}

function isUnique2(str) {
  const obj = {};
  for (let ai = 0; ai < str.length - 1; ai++) {
    if (obj[str[ai]]) {
      return false;
    }

    obj[str[ai]] = true;
  }
  return true;
}

console.log(isUnique("bce"));
