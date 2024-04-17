//Immediately Invoked Function Expression
//this is used to invoke/call the function after declaring the function without calling the function for example 
(
    function code(){
        console.log("chai piyo,");
    }
)();  
(
    ()=>{
        console.log("biscuit khao.");
    }
)();
// ================with parameters===============
(
    function code(name){
        console.log(`chai piyo, with ${name}`);
    }
)("shubham");
(
    (name)=>{
        console.log(`biscuit khao, with ${name}.`);
    }
)("shubham");

//Note: after creating the IIFE always use semicolon node forgots to give it