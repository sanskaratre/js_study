// // Singletom => call when we are not using the object litrals it creates with constructors
//    const user = new Object();
//    // or 
//    const user1 = {};
// user1.id = "01";
// user1.fName = "joy";
// user1.lName = "bath";

//    console.log(user1);

//    const myEmp = {
//     id : 101,
//     fullName : {
//       firstName : "Joy" ,
//       lastName : "Bath",
//    }
//   }
//    console.log(myEmp.fullName.firstName);
//    console.log(myEmp?.fullName?.firstName); // optional chaining

// //-----------------* Object Literals *-----------------//

// const mySymbol = Symbol("key");

// const myObj = {
//  firstName : "Ram",
//  lastName : "Sharma",
//  'full name' : "Ram sharma",
//  email : "ram@gmail.com",
//  age : 22,
//  [mySymbol]: "key0",
// }

// // console.log(myObj.firstName);  // Ram
// // console.log(myObj["firstName"]); // Ram
// // console.log(myObj['full name']); // Ram sharma

// // console.log(myObj.mySymbol); // typeof => string not symbol  => if i declare as without sq brackets then it gives value else undefined
// // console.log(myObj[mySymbol]); // typrof => Symbol

// // myObj.email = "ram.tcs.com";
// // console.log(myObj); 
// /* {
//     firstName: 'Ram',
//     lastName: 'Sharma',
//     'full name': 'Ram sharma',
//     email: 'ram.tcs.com',
//     age: 22,
//     [Symbol(key)]: 'key0'
//   }
// */

// // Object.freeze(myObj);
// // myObj.email = "ram.wipro.com";
// // console.log(myObj);
// /*
// {
//   firstName: 'Ram',
//   lastName: 'Sharma',
//   'full name': 'Ram sharma',
//   email: 'ram.tcs.com',
//   age: 22,
//   [Symbol(key)]: 'key0'
// }
// */

// myObj.myFunction = function () {
//     console.log(`Welcome to my Function`);  
// }
// console.log(myObj.myFunction());

// myObj.myFunction1 = function () {
//     console.log(`Welcome ${this.firstName}`);  
// }
// console.log(myObj.myFunction1());



// const obj01 = {
//   a: "apple",
//   b : "ball"
// }
// const obj02 = {
//   c : "cat",
//   d : "dog"
// }

// const obj05 = {
//   e : "elephant",
//   f : "fish"
// } 

// const obj03 = {...obj01, ...obj02}
// const obj04 = Object.assign(obj01,obj02) // change the exixting object bcs of heap m/m => reference type


// console.log(obj03); // { a: 'apple', b: 'ball', c: 'cat', d: 'dog' }
// console.log(obj04); // { a: 'apple', b: 'ball', c: 'cat', d: 'dog' }
// console.log(Object.assign({}, obj01,obj02,obj05)); // { a: 'apple', b: 'ball', c: 'cat', d: 'dog', e: 'elephant', f: 'fish' }

// console.log(Object.keys(obj01));  // [ 'a', 'b' ]
// console.log(Object.values(obj02)); // ["cat", "dog"]
// console.log(Object.entries(obj01)); // [ [ 'a', 'apple' ], [ 'b', 'ball' ] ]
// console.log(obj01.hasOwnProperty("a")); // true
// console.log(obj01.hasOwnProperty("g")); // false

//-------* Distructuring *-------//

const fruits = {
  mango : "yellow",
  guvava : "green",
  blueBarry : "bule",
  apple : "red",
  grapes : "black"
}

const {mango} = fruits
console.log(mango); // yellow  => insted of fruits.mango
const {mango : bestFruit} = fruits
console.log(bestFruit); // yellow










