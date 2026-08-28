//++++++++++++++++For Loop++++++++++++++++

for (let i = 1; i<=10; i++){
    if (i==5) {
        // console.log("5 is favorite number");
    }
    const element=i;
    // console.log(element);
    
}
// console.log(`outer from loop ${i}`);

for (let i = 1; i<=10; i++) {
    // console.log(`inner loop :${i}`);
    
    for (let j = 1; j <=10; j++) {
        // console.log(i + '*' + j+ '=' + i*j);
        
        // console.log(`outer loop ${j} and inner loop :${i}`);
    }
}

let myArray=["salman khan","Sharogh khan","Berlin","BahooBali"]
// console.log(myArray.length);

for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    // console.log(element); 
}
//  ++++++++++++break and continue++++++++++
// for (let index = 1; index <= 20; index++) {
//     if (index==5) {
//         console.log('5 is detected ');   
//         break                       //when we use break keyword then loop stop working according to condition
//     }
//     console.log(index);
for (let index = 1; index <= 20; index++) {
    if (index==5) {
        console.log('5 is detected ');   
        continue                      //when we use continue keyword then loop skip values according to condition
    }
    console.log(index);
}

