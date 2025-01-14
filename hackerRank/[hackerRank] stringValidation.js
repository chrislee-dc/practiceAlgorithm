function isValid(s) {
  // Write your code here

  const strObj = {};
  for (let i = 0; i < s.length; i++) {
    if (!(s[i] in strObj)) {
      strObj[s[i]] = 1;
      continue;
    }
    strObj[s[i]] = strObj[s[i]] + 1;
  }

  const strObjValues = Object.values(strObj);
  console.log(strObjValues);
  if (strObjValues.length === 1) return "YES";
  else if (strObjValues.length === 2) {
    return Math.abs(strObjValues[0] - strObjValues[1]) > 1 ? "NO" : "YES";
  }

  const maxStrObjValue = Math.max(...strObjValues);
  // for (let i = 0; i < strObjValues.length; i++) {
  //   strObjValues[i];

  // }

  const eachStringCount = {};
  for (let i = 0; i < strObjValues.length; i++) {
    if (!(strObjValues[i] in eachStringCount)) {
      eachStringCount[strObjValues[i]] = 1;
      continue;
    }
    eachStringCount[strObjValues[i]] += 1;
  }

  const eachStringCountValues = Object.values(eachStringCount);
  console.log(eachStringCountValues);

  if (eachStringCountValues.length > 2) return "NO";
  if (
    maxStrObjValue > 1 &&
    Math.abs(eachStringCountValues[0] - eachStringCountValues[1])
  ) {
    return "NO";
  }
  if (
    maxStrObjValue > 1 &&
    eachStringCountValues[0] + eachStringCountValues[1] > 2
  ) {
    return "NO";
  }
  // if()
  return "YES";
  // 3 2 2

  // let isMoreThanOne = 0;
  // for (let i = 0; i < eachStringCountValues.length; i++) {
  //   if(eachStringCountValues[i] > 1) {
  //     isMoreThanOne++;
  //   }
  // }
  // return isMoreThanOne > 1 ? "NO" : "YES"

  // let count = 0;
  // let oneDifference = 0;
  // for (let i = 1; i < eachStringCountValues.length; i++) {
  //   if (eachStringCountValues[i - 1] !== eachStringCountValues[i]) {
  //     count++;
  //     if (
  //       Math.abs(eachStringCountValues[i - 1] - eachStringCountValues[i]) === 1
  //     ) {
  //       oneDifference++;
  //     }
  //   }
  // }
  // console.log(count, oneDifference)
  // if (count > 2) {
  //   return "NO";
  // }
  // if (count === 1 && oneDifference > 1) {
  //   return "NO";
  // }
  // return "YES";
  // const strObjValues = Object.values(strObj).sort((a, b) => a - b);
  // console.log(strObjValues)
  // let count = 0;
  // for (let i = 1; i < strObjValues.length; i++) {
  //   if (strObjValues[i - 1] !== strObjValues[i]) {
  //     count++;
  //   }
  // }
  // return count > 1 ? "NO" : "YES";
}

const a = "aabbcd"; // 2 2 1 1
const b = "aabbccddeefghi"; // 2 2 2 2 2 1 1 1 1
const c = "abcdefghhgfedecba"; // 2
const d = "aaaabbcc";

// console.log(isValid(a));
// console.log(isValid(b));
console.log(isValid(c));
// console.log(isValid(d));
