let a =20;

// if (true){
//     let a = 10;
//     console.log(a);
    
// }

// console.log(a);

// const outer = () => {
//     let name = "ram";
//     const inner = () => {
//         let fullName = "ram sharma";
//         console.log(name);  
//         console.log(fullName);
        
//     }
//    //  console.log(fullName); //fullName is not defined
//        console.log(name);
       
//     inner();
// }

// outer();

// const adding = num => num+1;
// console.log( adding(5));


const user = {
    fName : "ram",
    lName : "sharma",
    fullName : function () {
        console.log(this.fName + " " + this.lName);
        
    }
}

const userThis = (u) => {
    (u.fullName());
    
}
userThis(user)

// **  => when we log this key word on browser it returns us a window object ,
// wheres when we log this in the node environment then it returns {}.
// and when we pring this key word in the function then it returns some values in the same node env if we declare a function in a standard way. not the arrow function
// bcs in arrow function it again returns {}.

