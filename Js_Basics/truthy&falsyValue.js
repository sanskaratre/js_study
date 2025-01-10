/*
// Falsy Values

false;
null;
0;
-0;
Bigint 0n;
"";
undefined;
NaN;

// Truthy Values

{};
[];
1;
"0";
"false";
"undefined";
" ";
function(){};

*/

// Nullish Coalescing Operator (??) : null undefined

let val;
// val = 5 ?? 10; // 5
// val = null ?? 1; // 1
// val = undefined ?? 9 // 9
// val = null ?? 10 ?? 15 // 10

console.log(val);

// NUllish Coalescing and ternary operator both are diffrent.

// console.log(false == 0 );  // true;
// console.log(false == "");  // true;
// console.log(0 == "");   // true;


//check empty array 
// Array.length == 0;  // true;

// check empty object
// Object.keys(objName).length == 0;  // true;