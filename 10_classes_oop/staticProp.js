class user{
    constructor(username){
        this.username=username;
    }
    logMe(){
        console.log(`username is:${this.username}`);
        
    }
    static createId(){
        return `12233`
    }
}

const hitesh=new user("hitesh")
console.log(hitesh.createId());


class Teacher extends user(){
    constructor(username,email){
    super(username)
    this.email=email
    }
   
}
const iphone=new Teacher( "ihpone",'ipone@.com')
console.log(iphone.createId());
