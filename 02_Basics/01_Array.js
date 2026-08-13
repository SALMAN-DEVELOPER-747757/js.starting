//+++++++++++Array++++++++++//
const myArray=[0,1,2,3,4,5]
const heist=["Berlin","Nairobi","Revo","Helsinki","Tokyo","Professor"]   //in array we can use string,object and numbers.
const myArray2=new Array(22,11,33,44,55,66,77,88)

// console.log(myArray2);          //for all array printing
// console.log(myArray2[0]);         //for specific element to print through index number
// console.log(heist[5]);

// myArray.push(6,7,8,9,10);            //adding extra element i previous array
// myArray.pop()                     //Pop removing the last one element from the array
// myArray.unshift(8)                   //they insert element in starting
// myArray.shift()                    //they removing first element from the array


// console.log(myArray.includes(10));   //checking array element exist or not?
// console.log(myArray.indexOf(5));     //finding index through element here index number of '5' is '4'

const newArray=myArray.join()         //changing typeof array into string
// console.log(myArray);
// console.log(typeof newArray);

//+++++++++slice and splice++++++//
console.log("A",myArray);

const myN1=myArray.slice(1,3)   //showing elements  between  1 and 3 but last element will be not include

console.log(myN1);
console.log("B",myArray);

const myN2=myArray.splice(1,5);     //they remove the splice values from the array
console.log("c",myArray);
console.log(myN2);










