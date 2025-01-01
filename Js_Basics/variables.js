const accountId = 1501;
let firstName = "sanskar";
var age = 25;
accountNumber = 1234567890;
let accountEmail ; //undefined
// accountId = 345678.  [not allowed]
   firstName = "shiv";
   age=26;

   /*
        Prefer not to use var 
        Because of issue in block scope and functional scope
        var is used in case when you want to use a variable globally 
   */

console.table([accountId,firstName, age, accountNumber,accountEmail])