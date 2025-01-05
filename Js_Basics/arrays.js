// const arr = [0,1,2,3,4,5];
// console.log(arr[arr.length-1]);

// const newArray = new Array(1,2,3,4,5);
// console.log(newArray);

// arr.filter((item) => {
//     console.log(item*5);
// })

// // arr.unshift(2)
// console.log(arr); // [2,1,2,3,4,5];
// //arr.shift();
// console.log(arr); // [2,3,4,5];

// console.log(arr.includes(4));
// console.log(arr.indexOf(9)); // -1

// let myArray = arr.join("-")
// console.log(myArray); // 1-2-3-4-5. 
// console.log(typeof(myArray));// typeof => string

// console.log(arr); // [ 0, 1, 2, 3, 4, 5 ]

// let myNewArr1 = arr.slice(1,4); // It returns the new array
// console.log(myNewArr1); // [ 1, 2, 3 ]
// let myNewArr2 = arr.splice(1,4); // This make changes in your original array
// console.log(myNewArr2); // [ 1, 2, 3, 4 ]

// console.log(arr); // [ 0, 5 ]

const arrFruits = ["mango", "kiwi", "papaya", "banana", "orange"];
const arrColours = ["white", "yellow", "pink", "black", "green", "blue"]

// console.log(arrFruits);
// console.log(arrColours);

// console.log(arrFruits.concat(arrColours)) // ['mango',  'kiwi', 'papaya', 'banana', 'orange', 'white','yellow', 'pink','black',  'green','blue'] // new array

// console.log(arrColours , ...arrFruits); // [ 'white', 'yellow', 'pink', 'black', 'green', 'blue' ] mango kiwi papaya banana orange

// const myNewArra = [...arrColours,...arrFruits]
// // console.log(myNewArra); // ['white','yellow', 'pink','black', 'green','blue', 'mango',  'kiwi', 'papaya', 'banana', 'orange'] 

// const numArray = [1,2,3,4,[5,6],7,[8,9,10,[11,12,13,14]],15];
// const singleNumArray = numArray.flat(2); // You have to pass the depth of array or you can simply write Infinity
//  console.log(singleNumArray); // [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];


 console.log(Array.isArray("sanskar")); // false
 // If you want to convert into array 
 console.log(Array.from("sanskar")); // ['s', 'a', 'n','s', 'k', 'a','r']

 console.log(Array.from({name : "sanskar"})); // ** return []

let mark = 5;
let mark1 = 10;
let mark2 = 20;

console.log(Array.of(mark,mark1,mark2)); // [5,10,20]

