const myNumbers=[1,2,3,4,5,6,7,8,9,10]
// const newNums=myNumbers.map((num)=>{return num+10})
const newNums=myNumbers
                       .map((num)=>num*10)
                       .map((num)=>num+5)        //At same time More than one method is called chaining like the left.
                       .filter((num)=>num>=50)
console.log(newNums);
