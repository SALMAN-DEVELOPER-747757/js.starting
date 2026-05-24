let myDate=new Date()

// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());    //it's common time 
// console.log(typeof myDate);

// let myCreatedDate=new Date(2026,0,20)   //in js months start from 0 means january 1 means february.
// let myCreatedDate=new Date(2026,0,20,4,56) 
let myCreatedDate=new Date("01-30-2026")     //in this case months start from 1 means january
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp=Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate=new Date()
console.log(newDate);
console.log(newDate.getMonth()+1);     //for beginner to know the terminology of starting month from 0 but we add 1 for understanding.

console.log(newDate.getDay());
console.log(newDate.toLocaleDateString('default',{weekday:'long',}));

