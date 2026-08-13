// const tinderUser= new Object();      //this is singleton object
const tinderUser= {}                       //And this is Non-singleton object.

tinderUser.id="1122ABCD"
tinderUser.name="SALMAN KHAN"
tinderUser.isLoggedIn=false

// console.log(tinderUser); 
const regularUser={
    email:"salmanGoogle@gmail.com",
    fullName:{
        userFullName:{
            firstName:"MUHAMMAD",
            middleName:"SALMAN",
            lastName:"Khan"
        }
    }
}
// console.log(regularUser.fullName.userFullName.firstName);

// console.log(regularUser.fullName.userFullName.firstName,
// regularUser.fullName.userFullName.middleName,
// regularUser.fullName.userFullName.lastName);        //THIS SHOW A CLEAN OUTPUT FROM THE ABOVE METHOD.

const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}
const obj4={5:"a",6:"b"}

// const obj3={obj1,obj2};
// const obj3= Object.assign({},obj1,obj2,obj4)     ///curly braces is not mandatory but good way b/c we guarantee that result will be inside the braces

const obj3={...obj1,...obj2,...obj4}          //this is advanced way to access the object and ... means split also teh above method is fine but this is simple and easy.

// console.log(obj3);

const user =[
        {
            id:1,
            email:"salman@yahoo.com"
        },
                {
            id:1,
            email:"salman@yahoo.com"
        },
                {
            id:1,
            email:"salman@yahoo.com"
        },
]
user[1].email;
console.log(tinderUser);
console.log(Object.keys(tinderUser));    //they print keys of object.  like id ,name ,email.
console.log(Object.values(tinderUser));   //this print values of object. like salman,salman@gmail.com
console.log(Object.entries(tinderUser));   //they print each in array format separately.


// console.log(tinderUser.hasOwnProperty('isLoggedIn'));  //they are showing exist or not the variable.
// console.log(tinderUser.hasOwnProperty('isLogged'));



const course= {
    courseName:"java Script",
    price:90000,
    courseInstructor:"Hitesh"
}

// course.courseInstructor;
const {courseInstructor: instructor}=course       //this is called destructor i have name courseinstructor to instructor.
// console.log(courseInstructor)
console.log(instructor);





