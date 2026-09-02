//ES6
// class user{
//     constructor(username,email,password){
//         this.username=username
//         this.email=email
//         this.password=password
//     }
//     encrptpassword(){
//         return`${this.password}abc`
//     }
//     changeUsername(){
//         return`${this.username.toUpperCase()}`
//     }

// }
// const chai=new user("salman","salman@.com",1222)
// console.log(chai.encrptpassword());
// console.log(chai.changeUsername());


//Behind the scene


function user(username,email,password){
this.username=username
        this.email=email
        this.password=password
}
user.prototype.encrptpassword=function(){
    return`${this.password}abc`}

    user.prototype.changeUsername=function(){
    return`${this.username.toUpperCase()}`
}
const tea=new user("Tea","salman@.com",1222)
console.log(tea.encrptpassword());
console.log(tea.changeUsername());


