const myNums=[1,2,3,4]
// const myTotal=myNums.reduce(function(acc,currval){
//     console.log(`acc is:${acc} and currval is:${currval}`);    //This is through function
    
//     return acc + currval;
// },0)
 
// const myTotal=myNums.reduce((acc,currval)=> acc+currval,0)        //This is through Arrow function
// console.log(myTotal);
const shoppingCart=[
    {
        item:"Js cousre",
        price:999
    },
    {
        item:"Java cousre",
        price:1999
    },
    {
        item:"python cousre",
        price:2999
    },
    {
        item:"SDLC cousre",
        price:4999
    },
]
const payTotal=shoppingCart.reduce((acc,item)=>acc+item.price,0)
console.log(payTotal);

