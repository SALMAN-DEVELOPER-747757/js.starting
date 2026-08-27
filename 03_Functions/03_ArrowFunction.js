const user={
    username:"SalmanKhan",
    price:20000,

    welcomeMessage:function(){
        console.log(`${this.username},welcome to website`);   //This keyword refer current text
        console.log(this);
        
    }
}
// user.welcomeMessage()
// user.username="berlin"         //here i change the context means value
// user.welcomeMessage()
// console.log(this);

// function chai(){
//     let username="salmankhan"
//     console.log(this.username);
    
// }
// chai()

// const chai=function(){
//     let username="salmankhan"
//     console.log(this.username);
// }
// chai()

const chai=()=>{
    let username="salmankhan"
    console.log(this);
}
// chai()

// const addTwo=(num1,num2)=>{       //First one method when we use curly braces then return keyword is mandatory and called explicit return
//     return num1+num2

// }
// console.log(addTwo(23,27));

// const addTwo=(num1,num2)=> num1+num2                                //Another way of arrow function declaration 

// const addTwo=(num1,num2)=> (num1+num2)    ///called implicit return b/c no need of return when we use parenthesis 
   
const addTwo=(num1,num2)=> ({username:"king"})   //to return object then we wrapped object in parenthesis
console.log(addTwo(23,27));


// const arrr=[12,23,34,45]
// arrr.forEach(()=>{})
// console.log(arrr);
