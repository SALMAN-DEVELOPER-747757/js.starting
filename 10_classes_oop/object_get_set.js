const User={
_email:"salman@.com",
_password:"acvvs",

  get email(){
    return this._email.toLocaleUpperCase()
},

  set email(value){
   this._email=value
}
}

const tea=Object.create(User)
console.log(tea.email);
