const promiseOne=new Promise(function(resolve,reject){
//Do async task
//Db calls,CryptoGraphy and Networks
setTimeout(function(){
    console.log('Async task is complete');
    resolve()
},1000)
});
promiseOne.then(function(){
    console.log("Promise consumed");
    
})
new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2 complete");
        resolve();
    },1000)
}).then(function(){
    console.log("Async task 2 resolved");
    
})
const promiseThree=new Promise(function(resolve,reject){
setTimeout(function(){
    resolve({userName:"salman1122",email:"salman@mail.com"})
},1000)
})
promiseThree.then(function(user){
    console.log(user);
    
})

const promiseFour=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({userName:"salman",pasword:123})
        }else{
            reject('Error:something done wrong')
        }
    },1000)
})
promiseFour.then((user)=>{
console.log(user);
return user.userName
}).then((userName)=>{
console.log(userName);
}).catch(function(error){
console.log(error);
}).finally(()=>console.log("The promise is either resolved or rejected")
)

const promiseFive=new Promise(function(resolve,reject){
     setTimeout(function(){
        let error = false;
        if(!error){
            resolve({userName:"Python",pasword:123})
        }else{
            reject('Error:python done wrong')
        }
    },1000)
})
async function consumePromiseFive() {
  try {
     const Response= await  promiseFive;
   console.log(Response);  
  } catch (error) {
    console.log(error);
    
  }
}
consumePromiseFive();

// async function getAllUser(){
// try {
//     const Response=await fetch('https://www.youtube.com/watch?v=NJwRQgsu1Q8&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&index=40')
// const data=await Response.json()
// console.log(data);
    
// } catch (error) {
//     console.log("E:",error);
    
// }

// }
// getAllUser()
fetch('https://api.github.com/users/hiteshchoudhary')
.then((Response)=>{
    return Response.json()
})
.then((data)=>{
console.log(data);

})
.catch((error)=> console.log(error));
