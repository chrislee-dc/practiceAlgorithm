// All of the characters are the same, e.g. aaa.
// All characters except the middle one are the same, e.g. aadaa.

function substrCount(n, s) {
  let result = n;
  for (let i = 0; i < s.length - 1; i++) {
    let currCharacter = s[i];
    let nextIndex = i;
    let isDiff = false;
    let newString = s[i];
    while (!isDiff) {
      nextIndex++;
      if (currCharacter === s[nextIndex]) {
        newString += s[nextIndex];
        result += 1;
      } else {
        newString += s[nextIndex];
        if (s[nextIndex + newString.length - 1]) {
          const addedString = s.substring(
            nextIndex + 1,
            nextIndex + newString.length
          );
          // this .every can be changed to .some()
          if (addedString.split("").every((ss) => ss === currCharacter)) {
            result += 1;
          }
        }
        isDiff = true;
      }
    }
  }
  return result;
}
// console.log(substrCount(5, "bbbab"));
// console.log(substrCount(3, "bab"));

// // 5 asasd => 7
console.log(substrCount(5, "asasd"));

// // 7 abcbaba => 10
console.log(substrCount(7, "abcbaba"));

// // 4 aaaa => 10
console.log(substrCount(4, "aaaa"));

// 1272919
console.log(substrCount(727310, testCase));
