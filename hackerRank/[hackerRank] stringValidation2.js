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
  const minValue = Math.min(...strObjValues);
  const maxValue = Math.max(...strObjValues);
  console.log(maxValue);
  console.log(minValue);

  if (minValue === maxValue) return "YES";
  let min_count = 0;
  let max_count = 0;
  for (let i = 0; i < strObjValues.length; i++) {
    if (strObjValues[i] === minValue) {
      min_count++;
    } else if (strObjValues[i] === maxValue) {
      max_count++;
    }
  }
  if (min_count + max_count != strObjValues.length) return "NO";
  return (max_count === 1 && maxValue === minValue + 1) || min_count === 1
    ? "YES"
    : "NO";
}

const a = "aabbcd"; // 2 2 1 1
const b = "aabbccddeefghi"; // 2 2 2 2 2 1 1 1 1
const c = "abcdefghhgfedecba"; // 2
const d = "aaaabbcc";
const e = "aaaabbbcc";

console.log(isValid(a));
console.log(isValid(b));
console.log(isValid(c));
console.log(isValid(d));
console.log(isValid(e));
