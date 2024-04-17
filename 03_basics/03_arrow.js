// Note: this keyword is used to refer the current context/values of the scope 
//this keyword working only in objects not in function even in arrow function

let user ={
    username:"shubham",
    price:999,
    message: function(){
        console.log(`Hello ${this.username}`);
        console.log(this);
    }
}
user.message();
user.username="balasaheb";
user.message();

console.log(this); //{}
//note: in node enviroment current context is empty,but not in the console. in browser it shows the global object window

//when you console this in a function it gives you plenty of context
function one() {
      console.log(this); 
}
one();
//
function two() {
    let username = "ramesh"
    console.log(this.username); //undefined this keyword working only in objects not in function
}
two();

const three = function(){
    let username = "ramesh"
    console.log(this.username); //undefined this keyword working only in objects not in function
}
three();

// ======================Arrow Functions==================

const four = ()=>{
    let username = "ramesh"
    console.log(this); //{} *interview Question explanation below
    console.log(this.username); //undefined this keyword working only in objects not in function
}
four();

//Important interview question when you log the this keyword in function it gives the plenty of context
//but, in arrow function when you log the this keyword it gives you empty {}

// ===========Return keyword in {}=======================
// Normal function if you is curly braces you have to write the return keyword
const five = (num1,num2) =>{
    return num1+ num2;
} 
//implicit return when its a single line code
let six = (num1,num2) => num1+ num2;
console.log(six);
// or add this in paranthesis
let seven = (num1,num2) => (num1+ num2)
console.log(seven);
//or while dealing with object use ()
let eight = (num1,num2) => ({username : "ramesh"})
console.log(eight);
