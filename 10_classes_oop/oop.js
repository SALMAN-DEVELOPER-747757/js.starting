const user={
    userName:"salman khan",
    loginCount:10,
    signIn:true,

    getUserDetails :function(){
        // console.log("Got user details from database");
        // console.log(`userName:${this.userName}`);
        console.log(this);
        
        
        
    }
}
// console.log(user.userName);
// console.log(user.getUserDetails());
// console.log(this);
function users(userName,loginCount,isLoginIn){
    this.userName=userName;
    this.loginCount=loginCount
    this.isLoginIn=isLoginIn

    this.greeting=function(){
        console.log(`welcome to ${this.userName}`);
        
    }
return this;
}

const userOne=new users("Berlin",12,true);
const userTwo=new users('Tokyo',11,false)
console.log(userOne);
console.log(userOne.constructor);

// console.log(userTwo);



