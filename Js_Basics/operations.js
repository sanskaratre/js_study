//----------------------** Operations **-----------------------//


let intiger = 2;
let negInteger = -intiger;
console.log(negInteger); // -2

console.log("Hey" + " Shiv"); // "Hey Shiv"
console.log(1 + 2); // 3
console.log("1" + 2); // 12
console.log(1  + "2"); // 12
console.log("1" + 2 + 2); // 122
console.log(1 + "2" + "2"); // 122
console.log(1 + 2 + "2"); // 32
console.log(1 + "2" + 2); // 122
console.log(1 + 2 + 2); // 5

console.log(true); // true
console.log(+true); // 1
console.log(+""); // 0

let num1 = 100;
num1++;
console.log(num1);

let x = 100;
let y = x++;

console.log(`x : ${x} , y : ${y}`); // x:101, y:100

let p = 100;
let q = ++p;

console.log(`x : ${p} , y : ${q}`); // p:101, q:101


// -------------------------------- * conversions *------------------------------- //

console.log("2" > 1);  // true

console.log(null > 0); // false
console.log(null == 0); // false
console.log(null >= 0); // true

console.log("2" > true); // true


console.log(undefined > 0); // false
console.log(undefined == 0); // false
console.log(undefined < 0); // false
console.log(undefined >= 0); // false

// When you use the compaire operatior then the string is converted in to number nad null is converted into 0.
// also the == is working diffrently bcs there are saperate rules for == and ===.




