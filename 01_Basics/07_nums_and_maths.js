const score=400;
// console.log(score);

const balance=new Number(300)
// console.log(balance);

// console.log(balance.toString().length)
// console.log(balance.toFixed(2))

const otherNumber=133.3321
// console.log(otherNumber.toPrecision(4));

const hundred=10000000
// console.log(hundred.toLocaleString('EN-PK'));

//++++++++++++MATHS+++++++++++++++//
// console.log(Math);
// console.log(Math.abs(-19));         //ABS just change negative value in positive value

// console.log(Math.round(6.6));

// console.log(Math.ceil(4.2))       //they making value large below 5 and above 5 from right
// console.log(Math.floor(6.9))     //they making value small it's not working from point side value

// console.log(Math.min(12,43,21,34,22,11));   //finding small value in array
// console.log(Math.max(12,34,567,856,34,767454,32));   //finding bigger value

console.log(Math.random());      //give values between 0 and 1
console.log((Math.random()*10)+1);    //multiply with 10 and add 1 to avoid 0 values
console.log(Math.floor(Math.random()*10)+1);   //we rapped with floor also value will be above to 1.

const min=10;
const max=30;
console.log(Math.floor(Math.random()*(max-min+1))+min);    //value between min and max but not below the min value




