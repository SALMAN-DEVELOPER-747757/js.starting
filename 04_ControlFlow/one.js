//IF

// const isUserLoggedIn=true
// const temperature=41


// if (temperature<=41) {
//     console.log('temperature less than or equal to 41');
    
// }else{
//     console.log('temperature greater than 50 ');
// }
// console.log('executed');



//  <,  >,  <=,  >=,  ==,  !=,  ===   triple equal is used for finding type of variable and check condition

// const score=200
// if (score>100) {
//     // var power ='fly'                     //let and const is not global function but var is global.
//     // let power ='fly'
//     const power ='fly'                  
//     console.log(`power is :${power}`);
    
// }
//  console.log(`power is :${power}`);

// const balance =1000
// if (balance>500) console.log('tested1'),console.log('tested2');
// if (balance<500) {
//     console.log('less than 500');
// }else if (balance<700) {
//     console.log('less than 700');
// }else if (balance<900) {
//     console.log('less than 900');
// }else{
//     console.log('less than 1200');
// }

const userLoggedin =true
const debitCard =true
const loggedInFromGoogle=false
const loggedInFromEmail=true

if (userLoggedin &&debitCard&&3==2){                   //this is anf 
    console.log('you are allow to buy courses ');   
}
if (loggedInFromGoogle||loggedInFromEmail) {    //this is or condition 
    console.log('you are logged in');
}
