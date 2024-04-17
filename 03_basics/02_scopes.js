/**
 * There are two scopes in javascript
 * 1.Global Scope
 * to declare a variable as a global var keyword is used
 * 2.Local Scope
 * to declarea a variable as local let & const keywords are used
 */

var a=30; //global variable
let b=20; //local variable
const c =40; //local variable
if(true){
    var a=50; // value is scoped in all code
    let b= 40; // value is scoped in {}
    const c=10 // value is scoped in {}
}
console.log(a);  //50
console.log(b); //20
console.log(c); //40
// =================================================
if(true){
    var d=50; // value is scoped in all code
    let e= 40; // value is scoped in {}
    const f=10 // value is scoped in {}
}
console.log(d);
// console.log(e); //gives error
// console.log(f); //gives error

/**
 * Interview question
 * scopes in console and code enviroment are different 
 */
function one(){
    const firstname="Shubham";
    function two(){
        const lastname=" patil"
        console.log(firstname + lastname); //child access the parent variable
    }
    // console.log(lastname); //parent cannot access the child variables
    two();
}
one();

// =====================Interesting==========================
add(5); //here we are calling method first then declaring
function add(num){
    console.log(num+1);
}
// addTwo(5,10); //here we cannot call this before declaring it
const addTwo = function(num1,num2){
    console.log(num1+num2);
}
addTwo(5,10);