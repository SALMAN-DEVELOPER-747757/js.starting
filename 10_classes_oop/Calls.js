function setUsername(Username){
this.Username=Username;

}

function createUser(Username,email,password){
    setUsername.call(this,Username)
    this.email=email;
    this.password=password

}
const chai=new createUser("chai","salman@.COM",1234)
console.log(chai);
