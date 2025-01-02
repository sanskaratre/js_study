let age = 25;
let myAge = "25";

console.log(typeof age);
console.log(typeof(age));

console.log(typeof myAge);
console.log(typeof(myAge));

let score = "21xyz"
let valueInNumber = Number(score);
console.log(valueInNumber);  // NaN
console.log(typeof(valueInNumber)); //  number

let firstName = null;
let firstNameNumber = Number(firstName)
console.log(typeof firstName); // object
console.log(firstName); // null
console.log(firstNameNumber); // 0


let lastName = undefined;
let lastNameNumberv = Number(lastName)
console.log(typeof lastName); // undefined
console.log(lastName);  // undefined
console.log(lastNameNumberv); // NaN

let isRight = true;
let isRightNumber = Number(isRight)
console.log(typeof isRight); // boolean
console.log(isRightNumber);  // 1
isRight = false;
isRightNumber = Number(isRight)
console.log(isRightNumber);  // 0

let isLoggedIn = 1;
let makeBoolean = Boolean(isLoggedIn);
console.log(isLoggedIn); // 1
console.log(typeof makeBoolean); // boolean
console.log(makeBoolean); // true

// When converting into boolean
// 1 => true
// 0 => false 
// "" => false
// "shiv" => true

let myId = 11;
let myIdToString = String(myId);
console.log(myId); // 11
console.log(myIdToString); // 11
console.log(typeof myId); // number
console.log(typeof myIdToString); // string










