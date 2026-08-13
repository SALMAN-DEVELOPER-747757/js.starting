//Singleton
//create.object..

//objects literals
const mySym=Symbol("key1")

const jsUser={
    name:"Salman khan",
    "Full name":"M.salman khan",
    [mySym]:"myKey1",
    age:21,
    location:"Swabi kpk",
    email:"salmnakhantecwork@gmail.com",
    isLoggedIn:false,
    lastLoginDate:["Monday","Saturday"]
}

// console.log(jsUser.email);
// console.log(jsUser["email"]);            //object accessing ways
// console.log(jsUser["Full name"]);
// console.log(jsUser[mySym]);

jsUser.email="salmankhanberlin1122@gmail.com";
// Object.freeze(jsUser);                          //freeze don't allow further changes.
jsUser.email="salmankhan747757@gmail.com"
// console.log(jsUser);

jsUser.greeting=function(){
    console.log("Hello js users");
    
}

jsUser.greetingTwo=function(){
    console.log(`Hello js users,${this["Full name"]}`);      //accessing that object
    
}
console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());






