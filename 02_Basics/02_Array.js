const marvel_heroes=["THOR","spiderman","Ironman"];
const dc_heroes=["Superman","Flash","Batman"];
const PK_heroes=["Salmankhan","sanju","Shahrogh"]

// marvel_heroes.push(dc_heroes);

// console.log(marvel_heroes);
// console.log(marvel_heroes[3][1]);
// const allHeroes=marvel_heroes.concat(dc_heroes)  //they merge array into another
// console.log(allHeroes);

const all_new_heroes=[...marvel_heroes,...dc_heroes,...PK_heroes]   // same as concat but it's simple way and you can merge multiple array through this.
// console.log(all_new_heroes);

const another_Array=[1,2,3,4,[5,6,],7,[8,9,6,[7,4,7,5,7]]]
const real_another_array=another_Array.flat(Infinity);      //taking array elements in sequence wise
console.log(real_another_array);

console.log(Array.isArray("salman"));
console.log(Array.from("salman"));
console.log(Array.from({name:"salman"}));      //it's interesting

let score1=100;
let score2=200;
let score3=300;
let score4=400;
console.log(Array.of(score1,score2,score3,score4));          //Together all variables




