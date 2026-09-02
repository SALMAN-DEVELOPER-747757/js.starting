class user{
    constructor(email,password){
        this.email=email
        this.password=password
    }
    get email(){
        return `${this._email}google.com`
    }
    set email(value){
        this._email=value
    }


    get password(){
     return `${this._password}Salman`
    }
    set password(value){
     this._password=value;
    }
}

const salman=new user("salman@.com","abcs")
console.log(salman.password);
console.log(salman.email);
