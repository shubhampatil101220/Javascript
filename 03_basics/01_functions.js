//method declaration
function hello(){
    console.log("Hello shubham");
}
//method calling
hello();

function add(num1,num2){ //passed variable called as paramaters
    console.log(num1 + num2);
}
add(5,3);    //passed values are called arguments

function multiply(num1,num2){
    return(num1*num2);
}
console.log(multiply(5,5));

//to pass multiple values in a function we use rest operator
function cartPrice(num){
    return num
}
console.log(cartPrice(100,200,300)); //100

//example of rest operator
function cartPrices(...num){
    return num
}
console.log(cartPrices(100,200,300)); //[ 100, 200, 300 ]

//interview question on rest operator
function cartPrices1(val1,val2,...num){
    return num
}
console.log(cartPrices1(100,200,300,400,500)); //[ 300, 400, 500 ]
//here val1=100, val2=200, rest is given to num