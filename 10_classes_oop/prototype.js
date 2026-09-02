// const myName="salman";
// console.log(myName.trueLength);
let myHeros=["thor","spiderman"];

let heroPower={
    thor:"hammer",
    spiderMn:"sling",

    getHeroPower:function(){
        console.log(`Spidy power is ${this.spiderMan}`);
        
    }
};
Object.prototype.salman=function(){
    console.log(`salman is present in all objects`);
    
}
Array.prototype.heySalman=function(){
    console.log("salman says hello");
    
}

heroPower.salman();
myHeros.salman();
myHeros.heySalman();
const user={
    Name:"chai",
    email:"salman@yahoo.com"
}

const teacher={
    makeVideo:true
}

const teachingSupport={
    isAvailable:false,

}

const TAsupport={
    makeAssignment:"js assignment",
    fullTime:true,
    __proto__:teachingSupport
}
teacher.__proto__=user

let anotherUserName="BerlinAndProfessor       ";
String.prototype.trueLength=function(){
    console.log(`${this}`);
    console.log(`the true length is ${this.trim().length}`);
}
anotherUserName.trueLength();
"SalmanKhan".trueLength();
"Kheyam    ".trueLength();
