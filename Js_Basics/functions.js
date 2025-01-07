const variablePrint = (v) => {
    console.log(v);
}

variablePrint("h");

const adder = (a,b) => {
    console.log(a+b);
}
// adder(2,5);   // Here 2 & 5 are argument and a & b are the perameters

const userLogin = (userName = "your name") => { // your name is default value
    return `Hey ${userName}! welcome to Dashboard`
}

// console.log(userLogin("Ram")); // Hey Ram! welcome to Dashboard
// console.log(userLogin("")); // Hey ! welcome to Dashboard
// console.log(userLogin()); // undefined! welcome to Dashboard
// console.log(userLogin(null)); // Hey null! welcome to Dashboard


const calculateTotalPrice = (...num) => {
    let result = 0 ;
    num.map((number)=> {
        result +=number;
        
    })
    return result
}

console.log(calculateTotalPrice(5,8,1,2,5)); // 21

const userObj = {
    firstName : "Ram",
    lastName : "Sharma"
}
const functionUser = (userData) => {
    console.log(userData.firstName , userData.lastName);
    
}
functionUser(userObj); // Ram Sharma 

const userArr = ["Ram","shyaam", "madhav" ,"krishna"];

const functionArr = (arr) => {
    console.log(arr[0]); 
    
}
functionArr(userArr) // Ram