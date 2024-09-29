// Binary Tree Level Order Traversal II

// Given a binary tree, return the bottom-up 
//level order traversal of its nodes' values. (ie, from left to right, level by level from leaf to root).

// For example:
// Given binary tree [3,9,20,null,null,15,7],
//     3
//    / \
//   9  20
//     /  \
//    15   7
// return its bottom-up level order traversal as:
// [
//   [15,7],
//   [9,20],
//   [3]
// ]

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
    
};

let root = [3,9,20,null,null,15,7];
let numbers = [];
let arrangedNumbers = [];

console.log('root.length:', root.length)

console.log(Math.sqrt(16))

console.log('Math.sqrt(Math.pow(2,root.length-1)):', Math.sqrt(Math.pow(2,root.length+1)))

// 2 4 8 16 32 64 128 256 512 1024
let rootArrayLength = root.length;
let numberForExponent = rootArrayLength + 1;
let result = 0;

let findExponentNumber = () => {
  for(let a = 1024, b = 10; numberForExponent > 1;) {
  
    if(numberForExponent > a) {
      numberForExponent / a
      result = result + 10;
    }
    else if(numberForExponent < a) {
      a = a / 2;
      b--;
      if(a == numberForExponent) {
        result = result + b;
        return result
      }
    }
  }
}

let exponentNumber = findExponentNumber();

console.log('Math.pow(2,root.length+1);:', Math.pow(2,0));

let arrangeArray = (exponentNumber) => {
 
}

// for( ;exponentNumber > 0 ;exponentNumber--) {
//   console.log(exponentNumber)
//   console.log(root.length)
//   let arrayValues = root.slice(root.length - Math.pow(2, exponentNumber - 1),root.length); // 3 1
//   root = root.slice(0, rootArrayLength - Math.pow(2, exponentNumber - 1));

//   console.log(arrayValues);
//   console.log(root)
  
// }

console.log('arrangeArray:', arrangeArray())

var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
console.log(numbers.unshift(fruits))
console.log(fruits.shift())
var citrus = fruits.slice(1, 5);
fruits = fruits.slice(0, 1);

console.log(null)


console.log(citrus);
console.log(fruits);
console.log(fruits.length)

console.log(1024 * 1024)
console.log(1048576 / 1024)
/**
 * 
 * Given binary tree [3,9,20,null,null,15,7],
 * 
 * 
 * 1 2 4 8 16 32 64이런식으로 value 가 정해져 있는데 그걸 array로 만들어서 배열한다 
 * 21 22 23 24 25 2에 6승 2에 7승 
 * 
 * 1 3 7 15 31 63
 * 
 * 1. 2에 몇승인지를 계산한 후에 (.length + 1)
 * 2. 그거를 Null 인지 아닌지를 봐서 array 안에 array로 넣고 그거를 결과값으로 가져온다
 * 
 */


var fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits;
function myFunction() {
  fruits.splice(0, 3);
  document.getElementById("demo").innerHTML = fruits;
}


let root = [3,9,20,null,null,15,7];


var levelOrderBottom = function(root) {
  if (root === null) { return []; }
 let result = [];
 let queue = [root];
 while(queue.length > 0) {
     let size = queue.length;
     let current = [];
     for (let i = 0; i < size; i++) {
         let head = queue.shift();
         current.push(head.val);
         if(head.left !== null) { queue.push(head.left); }
         if(head.right !== null) { queue.push(head.right); }
     }
     result.unshift(current);
 }
 return result;
};

console.log(levelOrderBottom(root))