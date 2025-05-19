
/*

answer : 21124 
  Number letter counts
Show HTML problem content
Problem 17
If the numbers 1 to 5 are written out in words: one, two, three, four, five, then there are 3 + 3 + 5 + 4 + 4 = 19 letters used in total.

If all the numbers from 1 to 1000 (one thousand) inclusive were written out in words, how many letters would be used?


NOTE: Do not count spaces or hyphens. For example, 342 (three hundred and forty-two) contains 23 letters and 115 (one hundred and fifteen)
contains 20 letters. The use of "and" when writing out numbers is in compliance with British usage.

*/


const oneToNine = [3, 3, 5, 4, 4, 3,5,5,4];
const tenToNineTeen = [3,6,6,8,8,7,9,8,8];
const twentyToNinety = [6,6,5,5,5,7,6,6];
const hundred = 7;
const hundredAnd = 10;

let test = 125
console.log( parseInt(test / 10), test % 10);
let result;


for(var i = 1; i < 1001 ; i++) {

  // 100 
  /** 99
   * 
   * 
   * 1~9 
   * 10~20
   * 20~99
   * 100
   */

  if(i < 10) {
    
  } else if ( 10 <= i < 20 ) {

  } else if( 20<= i < 100) {

  } else if(i < 1000) {
    
  } else {

  }
}

/* 

let oneToNine = 36;
let tenToNineTeen = 70;
let twentyToNinety = 46;

let test = 36

let test2 = 36 * 8
let test3 = 70 
let test4 = 46 * 10;

let ONETONINETY = 854;
console.log(test + test2 + test3 + test4);
<<<<<<< HEAD

let FINALRESULT = 854 * 9 + 7 * 9 + 36 * 100 + 11 + 854 + 10*99*9;

console.log(FINALRESULT)

let test5 = 36 * 9 * 9
let test6 = 61 * 9;
let test7 = 47 * 10 * 9;
let test8 = 7 * 1000;
let test9 = 36 * 100;

=======

let FINALRESULT = 854 * 9 + 7 * 9 + 36 * 100 + 11 + 854 + 10*99*9;

console.log(FINALRESULT)

let test5 = 36 * 9 * 9
let test6 = 61 * 9;
let test7 = 47 * 10 * 9;
let test8 = 7 * 1000;
let test9 = 36 * 100;

>>>>>>> 1b81a45f08adc4e898c919af38ae662441afae4d
let test10 = 11;

let test11 = 99*9





*/



/* formula until 100

one to nine * 9 * 10 * 

ten to nineteen * 10;

twentytoninety * 1000;

hundred: 7 * 90 * 10 / one thousand 11


/////////////////////////////////
1 ~ 9

one to nine 36 


10 ~ 99

1 ~ 9 * 8 / 10 ~ 19 / 20 ~ 90 * 10
(36)        (62)        (47)


100 ~ 999
1~ 9 * 9 * 10 / 10 ~ 19 * 10 / 20 ~ 90 * 10 * 10 / 7(hundred) * 100 * 10
(36)                (62)            (47)        

1~ 9 36 * 100 ( ex: "one" hundred)

and 99 * 9

1000

one thousand 11 
 
*/


/* Reference 
one two three four five six seven eight nine 
3    3   5    4     4   3    5     5     4    

ten eleven twelve thirteen fifteen sixteen seventeen eighteen nineteen 
 3   6         6       8     8        7        9         8      8
twenty 
6
thirty
6
forty 
5
fifty 
5
sixty
5
seventy
7
eighty
6
ninety
6

one hundred 

*/



