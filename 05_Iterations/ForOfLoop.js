let arr=[1,2,3,4,5,6]
for (const num of arr) {
    // console.log(`values o f arr is${num}`);
    
}

let greetings="Hello World!"
for (const greet of greetings) {
    // console.log(`each character is:${greet}`);
    
}



///Maps 
const map =new Map()
map.set('Pk','Pakistan')
map.set('FR','France')
map.set('JP','Japan')
map.set('USA','United state of america')
map.set('JP','Japan')                   //Map do not add same data it's like repetition not follow
// console.log(map);

for (const [key,value] of map) {
    // console.log(key,':--',value);
}

// const myobject={
//     game1:"GTA5",
//     game2:"Need for speed",
//     game3:"Call of duty",
//     game4:"San andresae"
// } 

// for (const [key,value] of myobject) {
//     console.log(key,value);
    
// }