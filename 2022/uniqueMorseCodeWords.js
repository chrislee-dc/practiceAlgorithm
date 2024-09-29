// International Morse Code defines a standard encoding where each letter is mapped to a series of dots and dashes, as follows: "a" maps to ".-", "b" maps to "-...", "c" maps to "-.-.", and so on.

// For convenience, the full table for the 26 letters of the English alphabet is given below:

// [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]

// Now, given a list of words, each word can be written as a concatenation of the Morse code of each letter. For example, "cab" can be written as "-.-..--...", (which is the concatenation "-.-." + ".-" + "-..."). We'll call such a concatenation, the transformation of a word.

// Return the number of different transformations among all words we have.

// Example:
// Input: words = ["gin", "zen", "gig", "msg"]
// Output: 2
// Explanation:
// The transformation of each word is:
// "gin" -> "--...-."
// "zen" -> "--...-."
// "gig" -> "--...--."
// "msg" -> "--...--."

// There are 2 different transformations, "--...-." and "--...--.".

// Note:

// The length of words will be at most 100.
// Each words[i] will have length in range [1, 12].
// words[i] will only consist of lowercase letters.

const morseCodes = [
  ".-",
  "-...",
  "-.-.",
  "-..",
  ".",
  "..-.",
  "--.",
  "....",
  "..",
  ".---",
  "-.-",
  ".-..",
  "--",
  "-.",
  "---",
  ".--.",
  "--.-",
  ".-.",
  "...",
  "-",
  "..-",
  "...-",
  ".--",
  "-..-",
  "-.--",
  "--..",
];
const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

// let words = ["gin", "zen", "gig", "msg"];
let words = ["gin", "zen", "gig", "msg"];

function convertAlphabetToMorseCode(splitWord) {
  let result = "";
  for (let i = 0; i < splitWord.length; i++) {
    let alphabetIndex = alphabet.indexOf(splitWord[i]);
    result += morseCodes[alphabetIndex];
  }
  return result;
}

function findUniqueTransformations() {
  let count = [],
    newTransformation = "",
    oldTransformation = "";
  for (let i = 0; i < words.length; i++) {
    let splitWord = words[i].split("");
    let morseCode = convertAlphabetToMorseCode(splitWord);

    if (count.length) {
      let includeChecker = count.includes(morseCode);
      if (!includeChecker) {
        count.push(morseCode);
      }
    } else {
      count.push(morseCode);
    }
  }
  console.log();
  return count.length;
}

findUniqueTransformations();

// /**
//  * @param {string[]} words
//  * @return {number}
//  */
// var uniqueMorseRepresentations = function(words) {

// };

// 1. 그 캐릭터 위치가 같은거를

/**
 * another solution
 */

// const letters = "abcdefghijklmnopqrstuvwxyz";
// const morseCode = [
//   ".-",
//   "-...",
//   "-.-.",
//   "-..",
//   ".",
//   "..-.",
//   "--.",
//   "....",
//   "..",
//   ".---",
//   "-.-",
//   ".-..",
//   "--",
//   "-.",
//   "---",
//   ".--.",
//   "--.-",
//   ".-.",
//   "...",
//   "-",
//   "..-",
//   "...-",
//   ".--",
//   "-..-",
//   "-.--",
//   "--..",
// ];
// const mapMorse = new Map(
//   morseCode.map((code, index) => [letters[index], code])
// );
// console.log(mapMorse);
// let words = ["gin", "zen", "gig", "msg"];
// var uniqueMorseRepresentations = function (words) {
//   const transformations = new Set();
//   console.log(transformations);
//   words.forEach((w) => {
//     console.log(w);
//     transformations.add(
//       w
//         .split("")
//         .map((l) => mapMorse.get(l))
//         .join("")
//     );
//   });
//   console.log(transformations);
//   return transformations.size;
// };

// console.log(uniqueMorseRepresentations(words));
