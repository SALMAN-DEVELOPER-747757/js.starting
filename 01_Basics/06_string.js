const name="Berlin";
const repoCount=10;
// console.log(name + repoCount + "Come here");

console.log(`Hello my Name is ${name} and my repoCount is${repoCount}`);
const gameName=new String('Berlin-Germany-tokyo')

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.toLowerCase());
console.log(gameName.charAt(11));          //finding character position through index

console.log(gameName.indexOf('G'));         //finding his index number

const newString=gameName.substring(0,7);    //end value does not include in this case 7.
// console.log(newString);
 
const anotherString=gameName.slice(-4)         //it's not need starting value behave like reverse
console.log(anotherString);


const newStringone="     Salman.     ";
console.log(newStringone);
console.log(newStringone.trim());       //Trim remove the space from letf and right

const url="https://Berlin.com/salman%50khan/germany"
console.log(url.replace('%50','_' ));       //replacing things like %50 into _.
console.log(url.includes("khan"));         //to check the link character is avialable or not.


console.log(gameName.split('-'));       //split converting into array form and replace the things.











