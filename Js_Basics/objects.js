// Singletom => call when we are not using the object litrals it creates with constructors
// like => 
       //   Object.create

//-----------------* Object Literals *-----------------//

const mySymbol = Symbol("key");

const myObj = {
 firstName : "Ram",
 lastName : "Sharma",
 'full name' : "Ram sharma",
 email : "ram@gmail.com",
 age : 22,
 [mySymbol]: "key0",
}

// console.log(myObj.firstName);  // Ram
// console.log(myObj["firstName"]); // Ram
// console.log(myObj['full name']); // Ram sharma

// console.log(myObj.mySymbol); // typeof => string not symbol  => if i declare as without sq brackets then it gives value else undefined
// console.log(myObj[mySymbol]); // typrof => Symbol

// myObj.email = "ram.tcs.com";
// console.log(myObj); 
/* {
    firstName: 'Ram',
    lastName: 'Sharma',
    'full name': 'Ram sharma',
    email: 'ram.tcs.com',
    age: 22,
    [Symbol(key)]: 'key0'
  }
*/

// Object.freeze(myObj);
// myObj.email = "ram.wipro.com";
// console.log(myObj);
/*
{
  firstName: 'Ram',
  lastName: 'Sharma',
  'full name': 'Ram sharma',
  email: 'ram.tcs.com',
  age: 22,
  [Symbol(key)]: 'key0'
}
*/

myObj.myFunction = function () {
    console.log(`Welcome to my Function`);  
}
console.log(myObj.myFunction());

myObj.myFunction1 = function () {
    console.log(`Welcome ${this.firstName}`);  
}
console.log(myObj.myFunction1());




