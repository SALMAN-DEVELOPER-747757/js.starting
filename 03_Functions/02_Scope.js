
// var c=200
let a=3000

if(true){
    let a=10
    const b=20
    var c=30
    // console.log("Inner is:",a,"And Global is ");
}

// console.log(a);
// console.log(b);
// console.log(c)


function one(){
    const username="SalmanKhan"
    function two(){
        const website="yahoo"
        // console.log(username)      //child can access parent but parent cannot access child that's it
        
    }
    // console.log(website)
    two()
    
}
// one()

if (true){
    const username="salmankhan"

    if (username=="salmankhan"){
        const website="Yahoo"
        // console.log(username + website)
        
    }
    // console.log(website)
    
}
// console.log(username)


// ++++++++++++++++++++++++++Interesting+++
console.log(addOne(6))       //and here we can access before initialization b/c function is alone not variables with him

function addOne(num){
    return num+1
}

// console.log(addTwo(8)) this is called hoisting we cannot access before initialization

const addTwo=function (num){
    return num+2
}
console.log(addTwo(8))

