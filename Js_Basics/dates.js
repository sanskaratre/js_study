// Dates starting from = 1 jan, 1970;

let myDate = new Date();
console.log(myDate); // 2025-01-04T16:39:21.432Z
console.log(typeof(myDate)); // object
console.log(myDate.toString()); // Sat Jan 04 2025 16:39:21 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toString('en-IN')); // Sat Jan 04 2025 16:40:18 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString()); // Sat Jan 04 2025
console.log(myDate.getDate()); // 4
console.log(myDate.toLocaleString()); // 1/4/2025, 4:40:18 PM
console.log(myDate.toLocaleDateString()); // 1/4/2025
console.log(myDate.getDay()); // 6 not sat

let myCreatedDate = new Date(2024, 0, 24); // 0=> jan 24=> date
console.log(myCreatedDate.toDateString()); // Wed Jan 24 2024

let myDateCreated = new Date("2024-11-25");
console.log(myDateCreated); // 2024-11-25T00:00:00.000Z
console.log(myDateCreated.getDay()); // 1 => monday

let mybirthDate = new Date("11-25-2024");
console.log(myDateCreated); // 2024-11-25T00:00:00.000Z
console.log(myDateCreated.toLocaleDateString()); // 11/25/2024

let myTimeStamp = Date.now();
console.log(myTimeStamp); // 1736009478691

console.log(Math.floor(Date.now()/1000)); // get into sec =>  1736009666


let newDate = new Date();
console.log(newDate.toLocaleString('default', {
    'weekday' : 'long'
})); // saturday







