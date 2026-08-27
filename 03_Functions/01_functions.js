
function printName(){
console.log("S");
console.log("A");
console.log("L");
console.log("M");
console.log("A");
console.log("N");

}
// printName();

// function addTwoNumbers(Number1,Number2){         //numbr1 and numbr2 is parameter.
//     console.log(Number1+Number2);
    
// }

function addTwoNumbers(Number1,Number2){         //numbr1 and numbr2 is parameter.
    //  let result=Number1+Number2;
    // console.log("salman");
    return Number1+Number2                 //another way to declare  the parameter
     
    //  return result                           //after return we cannot print anything
     
     
    
}
// addTwoNumbers(25,25)             //And here 25 is argument.
const result =addTwoNumbers(2,3)
// console.log("result:",result);

function userLoginMessage (username="berlin"){      //if we pass argument then this value will be automatically override.
    // if(username==undefined){
    if(!username){
        console.log("Please Enter UserName");
        return
    }
    return`${username} just logged in`

}
// console.log(userLoginMessage("SALMANkhan"))
// console.log(userLoginMessage("KING"));       ///if we not pass any argument the will print undefined.



function calculateCardPrice(val1,val2,...num1){ //this is rest operator or spread    //when i spread the function then they provide values in array formate.
    return num1

}
// console.log(calculateCardPrice(211,2000,12,13,14,15,16,17));

const user ={                     //object
    username:"SalmanKhan",
    price:9999

}

function handleObject(anyObject){        //function
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);
    
}
// handleObject(user)
handleObject({           //another way to declare object like this.
    username:"Berlin",
    price:3333
})

const myArray=[100,2200,300,400,500]                    //Array 
function returnSecondValue(getArray){
    return getArray[4]


}
// console.log(returnSecondValue(myArray))
console.log(returnSecondValue([100,200,300,400,500]));
