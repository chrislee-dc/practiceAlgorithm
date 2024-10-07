
// function findAnswer() {
//   for(var inputNum = 614657;  ;inputNum++) {
//     var input = inputNum;
//     var splitNum = input.toString().split("");
//     var sum = 0;
//     var result = splitNum.filter(function(value, index, arr) {
//       //find a number which is used once
//       //if a number used twice or more, then extract the number once
//       sum += parseInt(value);
//       return arr.indexOf(value) === index;
//     });
//     var a5 = findOutput(result, sum, input);
//     if(a5) {
//       return a5; 
//     } else{
//       continue;
//       //return a5;
//     }
//   }
// }

// function findOutput(result, sum, input) {
//   //find a output with base number
//   var startingNumber = 1;
//   for(var multiply = 0; multiply < result.length; multiply++) {
//     startingNumber = sum * startingNumber;
//   }
//   if(input === startingNumber) {
//     return input;
//   } else {
//     startingNumber = 1;
//     return false;
//   }
// }

// console.log(findAnswer())


// filter를 다시 생각해보기 -1로 대체


// ------------------------//Second Version



// function sepNsum(n){
//   /*  Convert int to array
//       last array value is sum of each digits of n
//       512 -> [2,1,5,8]
//   */
//   var ten = 10, remain = 0
//   var store = []
//   while(n != 0){
//     remain = n % ten
//     store.push(remain)
//     n = parseInt(n / ten)
//   }
//   store.push(store.reduce(add,0))
//   return store
// }

// function add(a,b){
//   // callback function
//   return a + b
// }

// function powerLen(arry){
//   /*  Replace Duplicate Value with -1
//       Only greater than -1 is count
//       [1,-1,2,-1,-1,5] -> 3

//   */
//   var count = 0
//   var store = []

//   arry = arry.slice(0,arry.length - 1)

//   for(var i = 0; i < arry.length; i++){
//     for(var j = i + 1; j < arry.length; j++){
//       if(arry[i] == arry[j]){
//         arry[j] = -1
//       }
//     }
//   }

//   for(var i = 0; i < arry.length; i++){
//     if(arry[i] != -1){
//       count += 1
//     }
//   }

//   return count

// }


// var info, base,power

// console.log(Math.pow(base,power))

// for(var i = 1; i < 10000000; i++){
//     info = sepNsum(i)
//     base = info[info.length-1]
//     power = powerLen(info)

//     if(i == Math.pow(base, power)){
//       console.log(i)
//     }

// }
