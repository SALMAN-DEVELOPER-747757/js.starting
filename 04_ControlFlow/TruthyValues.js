// const userEmail="berlin@gmial.com="
const userEmail=[]
if (userEmail) {
    console.log('yes got the email');
    
}else{
    console.log("don't allow the email");
    
}

// Falsy values
// false , 0, -0, bigint 0n, null, undefined , Nan, ""           <== so these are falsy values 

// truthy values
// "false", " ", "0", [], {}, function(){}


// if (userEmail.length === 0) {
//     console.log("yes array us empty");
// }

const myObject={}

if (Object.keys(myObject).length===0) {
    console.log("object is empty");
}

                               // Nullish coalescing operator(??): null , Undefined
let val1;
// val1 =3??10
// val1 = null??10     //in this case they will print values otherwise if no value then will print null or undefined
// val1=undefined??20
// val1 =null??30??10??undefined              // in this case they node will print first one value
// val1 =null
console.log(val1);

                             //Terniary operator
// condition ? true : false
const iceTeaPrice=100
iceTeaPrice<=80 ?console.log("less than 80"):console.log("greater than 80");


    
