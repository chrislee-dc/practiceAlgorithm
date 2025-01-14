// https://www.hackerrank.com/challenges/common-child/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=strings

function commonChild(s1, s2) {
  let longestStrCount = 0;

  for (let i = 0; i < s1.length; i++) {
    const currLetter = s1[i];
    const currLetterIndexes = []; // 0, 3

    for (let j = 0; j < s2.length; j++) {
      if (s2[j] === currLetter) currLetterIndexes.push(j);
    }

    if (!currLetterIndexes.length) continue;

    const allLetterCases = [];
    let nextS1Index = i + 1;
    /**
     * find A indexes from s2 and push
     * find next letter from s1 which is B
     * find B index from s2 and push which is 1, 4
     *
     * find next letter from s1 which is C
     * find C index from s2 and push, but combine with last B
     */
    while (currLetterIndexes.length) {
      for (let k = 0; k < s2.length; k++) {}
    }
  }
}

console.log(commonChild("ABCDEF", "ABCABE"));
// console.log(commonChild("ABCD", "ABDC"));
// console.log(commonChild("HARRY", "SALLY"));
// console.log(commonChild("AA", "BB"));
// console.log(commonChild("SHINCHAN", "NOHARAAA"));
// console.log(commonChild("ABCDEF", "FBDAMN"));
// console.log(commonChild("AA", "BB"));
// console.log(new Set("firefox"));
// console.log(new Set("firefox").values());

// ABCD, ABDC => 3
// HARRY, SALLY => => 2
// AA, BB => 0
// SHINCHAN, NOHARAAA => 3
// ABCDEF, FBDAMN => 2
// ABCDEF, ABZXYBCDEF => ABCDEF

// for(const [s1Key, s1Indexes] of Object.entries(s1Obj)) {
//   if(!s2Obj[s1Key]) continue;

//   const s2Indexes = [...s2Obj[s1Key]];
//   let s2ArrIndex = 0;

//   /**
//    * 1. find out A and assign to like ['0', '3']
//    * 2. find out B and assign to like ['01', '04', '']
//    * 2. find out  B using another A index
//    *
//    * result ['01']
//    */
//   while(true) {
//     if(s2ArrIndex + 1 === s2Indexes.length) {
//       s2ArrIndex
//     }
//   }
// }
