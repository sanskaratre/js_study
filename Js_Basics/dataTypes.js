"use strict" 

// --------------------* Data Type *---------------------- //
/*  ==== Primitive ===== (Call By Value)

    7 Type : String, Number, Boolean, Null, Undefined, Symbol, BigInt

    ==== Non-Primitive ===== (Call By Reference)

    Array, Objects, Functions
    
*/

/*
    JavaScript is a dynamically typed language, but TypeScript is a statically typed language. 
    Longer answer: In dynamically typed languages all type checks are performed in a runtime, 
    only when your program is executing.
*/ 

/* 
    1. Treat all js code as newer version. 
    2. The "use strict" directive in JavaScript enhances code quality by enforcing stricter parsing and error handling, 
       helping catch common programming mistakes and preventing the use of certain error-prone features.
    3. Strict mode makes it easier to write "secure" JavaScript.   
*/

// alert(2+2) => Throws error bcs we are using nodejs, not browser

/*
    There are some data types in the JS like:
        string => name = "sanskar";
        number => age = 25; range => 2 to 2^52
        bigint => let x = BigInt("123456789012345678901234567890");
        boolean => isloading = true/false;
        null(empty) => let email = null; => standalon value; => Type of null is object
        undefined => let output; => Type of undefined is undefined;;
        symbol

        array => let arr = [1,2,3,4,5,6,7,8,9,0];
        object => let student = 
                        {
                            name : "sanskar"'
                            age : 25,
                            email : "sanskar@gmail.com",
                            isPass : true,
                         }

*/

const id = Symbol("123");
const otherId = Symbol("123");

console.log(id, otherId);
console.log(id === otherId); // false

//========= Type of DataType ===========//

let arr = [1,2,3,4,5,6,7,8]
console.log(typeof(arr)); // object

let user = {
    firstName : "sanskar",
    lastName : "atre"
}
console.log(typeof(user)); // object

 function profile() {
    console.log("This is my Function");
    
}
console.log(profile); // function


let myNull = null
console.log(typeof(myNull)); // object


/* M/M => 
  Stack -> Used for primitive data-type
           Here you get the copy
  Heap ->  used for non-primitive data-type
           Here you get the original value(reference)

*/
