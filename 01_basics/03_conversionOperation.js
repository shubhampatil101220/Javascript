let score = "33";

console.log(typeof score); //string

let number = Number(score) //typeconversion
console.log(typeof number); //number
console.log(number); //33


// Number type conversion from specific data
/*
Number("33") => 33
Number("33a") => NAN
Number(true) => 1
Number(false) =>0
Number(null) =>0
number(undefined) => NAN

*/
console.log(Number(null));
// Boolean type conversion from specific data
/*
Boolean(0) => false
Boolean(33) => true
Boolean("33") => true
Boolean("33a") => true
Boolean("") => false
Boolean(true) => true
Boolean(false) =>false
Boolean(null) =>false
Boolean(undefined) => false

*/
console.log(Boolean(undefined));

// Boolean type conversion from specific data
/*
String(0) => "0"
String(33) => "33"
String("33") => "33"
String("33a") => "33a"
String("") => ""
String(true) => "true"
String(false) =>"false"
String(null) =>"null"
String(undefined) => "undefined"

*/
console.log( String(undefined));

//===================Operations===================
/*
for operations we use arithmetic operators
= assignment operator
+ = addition
- = substraction
/ = divide
% = modulous/remainder
++ = increment operator
-- = decrement operator
a++ = postfix increment
++a = prefix increment
a-- = postfix decrement
--a = prefix decrement
*/
let str1 = "Hello";
let str2 = " Shubham";
console.log(str1+str2);

//Ecmascript standards read the value from left to right  
console.log(1+2); //3
console.log("1" +2); //12
console.log(1+"2"); //12
console.log("1"+2+2); //122
console.log(1+2+"2"); //32

console.log(+true); //1 number type
console.log(+""); //0 number type
console.log(+null); //0 number type
console.log(+undefined); //NAN number type
console.log(+NaN); //NAN number type

