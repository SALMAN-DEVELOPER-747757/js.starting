//Immediate Invoked Function Expressions (IIFE)

(function chai(){         //This named IIFE
    console.log(`BD Connected`);
    
})();           //this is method is called iife.When we write two time iife then need semicolon after each iife.

// (function code (){
//     console.log(`Db connected again`);   //so through function we print immediately
    
// }) ()

((Name)=>{           //This is unnamed IIFE
    console.log(`Db connected again ${Name}`);   //so through arrow ftn we print immediately
    
}) ('KheyamKhan')