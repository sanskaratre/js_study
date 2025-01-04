const name ="sanskar";
const age = 20;

 console.log(name + age + " Hello"); // old 

 console.log(`Hello my name is ${name} and my age is ${age}.`); // New

 // Another way to declare string is. :
  const firstName = new String("sanskar-atre ");
  console.log(firstName); // 0:s, 1:a, 2:n, .....

  console.log(firstName.length);

  console.log(firstName.toUpperCase());
  
 console.log(firstName.charAt(2));
 console.log(firstName.indexOf('s'));
 console.log(firstName.endsWith('-'));
 console.log(firstName.substring(8,firstName.length));
 console.log(firstName.slice(-4));
 console.log(firstName.replace('-', ""));
 
 
let lstName = new String("atre-singh-sharma-tiwari");
console.log(lstName.split("-"));
console.log(lstName.split("-")[0]);
console.log(firstName.concat(...lstName));


 