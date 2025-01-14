// https://www.hackerrank.com/challenges/common-child/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=strings

function commonChild(s1, s2) {
  let longestStrCount = 0;

  const s1Obj = {};
  const s2Obj = {};
  for (let i = 0; i < s1.length; i++) {
    if (!(s1[i] in s1Obj)) {
      s1Obj[s1[i]] = [];
    }
    s1Obj[s1[i]].push(i);

    if (!(s2[i] in s2Obj)) {
      s2Obj[s2[i]] = [];
    }
    s2Obj[s2[i]].push(i);
  }

  console.log(s1Obj);
  console.log(s2Obj);

  const s1Arr = Object.entries(s1Obj);
  for (let i = 0; i < s1Arr.length; i++) {
    // for (let i = 0; i < 1; i++) {
    const [s1Key, s1Indexes] = s1Arr[i];
    if (!s2Obj[s1Key]) continue;
    // for (let i = 0; i < 1; i++) {
    let allUseCases = s2Obj[s1Key].map((item) => `${item}`);
    let s1ArrIndex = i;
    let allUseCasesIndex = 0;
    while (s1ArrIndex < s1Arr.length) {
      s1ArrIndex++;
      // console.log(s1ArrIndex)
      let newAllUseCases = [];
      if (!s2Obj[s1[s1ArrIndex]]) continue;
      const s2ObjIndexes = s2Obj[s1[s1ArrIndex]];
      // console.log(allUseCases);
      // console.log(s2ObjIndexes);
      for (let k = 0; k < s2ObjIndexes.length; k++) {
        // compare number
        allUseCases.forEach((indexString) => {
          if (+indexString.slice(-1) < s2ObjIndexes[k]) {
            // allUseCases[tempIndex] += s2ObjIndexes[k];
            newAllUseCases.push((indexString += s2ObjIndexes[k]));
          } else {
            newAllUseCases.push(indexString);
          }
        });
      }

      allUseCases = newAllUseCases;
    }
    console.log(allUseCases, "allUseCases2");
    const maxUseCase = Math.max(...allUseCases.map((item) => item.length));
    longestStrCount =
      maxUseCase > longestStrCount ? maxUseCase : longestStrCount;
  }
  return longestStrCount;
}

// console.log(
//   commonChild(
//     "WEWOUCUIDGCGTRMEZEPXZFEJWISRSBBSYXAYDFEJJDLEBVHHKS",
//     "FDAGCXGKCTKWNECHMRXZWMLRYUCOCZHJRRJBOAJOQJZZVUYXIC"
//   )
// );

// // '0125', '01'
// console.log(commonChild("ABCDEF", "ABCABE"));

// // ABCD, ABDC => 3
// console.log(commonChild("ABCD", "ABDC"));

// // HARRY, SALLY => => 2
console.log(commonChild("HARRY", "SALLY"));

// // SHINCHAN, NOHARAAA => 3
// console.log(commonChild("SHINCHAN", "NOHARAAA"));

// // AA, BB => 0
// console.log(commonChild("AA", "BB"));
