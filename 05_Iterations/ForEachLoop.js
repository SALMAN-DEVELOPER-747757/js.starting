const coding=["js","java","python","mangodb","cpp","c#"]

coding.forEach(function (i){         //foreach required callbackfunction without function name as we see.
    // console.log(i);
    
})

coding.forEach((j)=>{
    // console.log(j);
    
})      //this is arrow function

function printMe(item){ ///automatically calling method of function
    // console.log(item);
}
coding.forEach(printMe)

coding.forEach((item,index,arr)=>{       //printing index, array and item. 
// console.log(item,index,arr);

})

const myPrograming=[
    {
        programingName:"javaScript",
        programingFileName:"js"
    },
    {
        programingName:"Java",
        programingFileName:"java"
    },
    {
        programingName:"python",
        programingFileName:"py"
    }
]
myPrograming.forEach( (item)=>{
    // console.log(item.programingFileName);      
    
} )
