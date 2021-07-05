// Given an array arr of integers, check if there exists two integers N and M such that N is the double of M ( i.e. N = 2 * M).

// More formally check if there exists two indices i and j such that :

// i != j
// 0 <= i, j < arr.length
// arr[i] == 2 * arr[j]

// Input: arr = [10,2,5,3]
// Output: true
// Explanation: N = 10 is the double of M = 5,that is, 10 = 2 * 5.

// Input: arr = [7,1,14,11]
// Output: true
// Explanation: N = 14 is the double of M = 7,that is, 14 = 2 * 7.

// Input: arr = [3,1,7,11]
// Output: false
// Explanation: In this case does not exist N and M, such that N = 2 * M.

// /**
//  * @param {number[]} arr
//  * @return {boolean}
//  */
//  var checkIfExist = function(arr) {

// };

// let arr = [3,1,7,11]

function test() {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) continue;

        for (let a = 0; a < arr.length; a++) {
            if (i !== a && arr[a] * 2 === arr[i]) return true;
        }
    }
    return false;
}

// console.log(test())


// let i = arr.length - 1;

// while(i > -1) {
//     if(arr[i] % 2 !== 0) continue;


// }

// let arr = [-2,0,10,-19,4,6,-8]

// function test() {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] >= 0 && arr[i] % 2 !== 0) continue;

//         console.log(arr[i])

//         if(arr.indexOf(arr[i] / 2) > -1) return true

//     }
//     return false;
// }

// console.log(test());

// let test = [1, 2, 3];

// for (let i = 0; i < test.length; i++) {
//     const element = test[i];
//     if (test[i] === 2) {
//         continue;
//     }

//     console.log(test[i]);
// }