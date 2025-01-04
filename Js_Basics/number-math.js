let marks = 100;
// OR
let myMarks = new Number(101);

console.log(marks); // 100
console.log(myMarks); //[Number: 101]
console.log(myMarks.toString()); // 101
console.log(typeof(myMarks)); // object
console.log(marks.toFixed(2)); // 100.00

let balance = 25.787654321;
console.log(balance.toPrecision(2)); // 26
console.log(balance.toPrecision(3)); // 25.8

let rs = 10000000;
console.log(rs.toLocaleString('en-IN')); //1,00,00,000

// -------* Maths *----------//

console.log(Math.PI);

console.log(Math.abs(-2)); // 2 ==> abs => absolute => -ve to +ve intiger 
console.log(Math.round(4.5)); // 5
console.log(Math.ceil(4.6)); // 5
console.log(Math.floor(4.6)); // 4
console.log(Math.sqrt(144)); // 12
console.log(Math.min(9,3,6,2,8)); // 2
console.log(Math.max(9,3,6,2,8)); // 9
console.log(Math.floor((Math.random()*10)+1));  // 1 to 10

let min = 5;
let max = 15;

console.log(Math.floor(Math.random() * (max-min +1)) + min); // Number between 5 to 15








