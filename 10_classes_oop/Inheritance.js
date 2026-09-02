class user{
    constructor(username){
        this.username=username
    }
    logMe(){
        console.log(`Username is ${this.username}`);
        
    }
}

class Teacher extends user{
    constructor(username,email,password){
        super(username)
        this.email=email
        this.password=password
    }

    addCourse(){
        console.log(`course was added ny ${this.username}`);
        
    }

}
const chai= new Teacher("chai","chai@gooole.com","1223")
chai.logMe();
const masalaChai=new user("maslaChai")
masalaChai.logMe()

console.log(chai instanceof user);
