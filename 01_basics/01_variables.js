// const AccountId=1454541;
// let AccoountEmail ="shubham@gmail.com";
// var AccountPassword ="shubham@12345";


// /*AccountId =165113;  this isNot Allowed in javascript,because in modern javascript 
// const variable can not reinitialize once it is initialized.*/

// // but we can reinitialize the variable which are declared with the let keywords

// AccoountEmail ="updateEmail@gmail.com";

// //we can also set variable without any keyword but it is no recommended
// currentCity ="Pune";

// // LET KEYWORD
// /* let keyword we can first intialize the type and then we can assign the value 
// like following*/
// let AccountState;
// AccountState ="blocked"

// //CONST KEYWORD
// /*but in const keyword we cannot do such like let keyword 
// const amount;
// amount =123;
// this is purely not allowed
// */

// // bydefault values of let variable is undefined
// let interest;
// // we can log the data by two way
// console.log(AccountId);

// // and
// console.table([AccountId , AccoountEmail , AccountPassword, currentCity,AccountState,interest]);


// //NOTE: in multiple expression it takes the last value
// let a =("shubham","patil") 
// console.log(a); //patil

// let b = (44,45,46);
// console.log(b); //46

// let c =(3*3,4-2,15*2);
// console.log(c); //30

// let d = (b*c,b-c,c+b);
// console.log(d); //76


//interview question
// Step 1
 console.log(a);   //undefined
console.log(b);  //this line gives reference error of not defined b because hoisting not works here
 var a=b=5;


// step 2
console.log(c); // Cannot access 'c' before initialization
console.log(d);  // Cannot access 'd' before initialization
let c=d=5;   //let cannot performe hoisting


 //step 3
 var e=f=5;
 console.log(e); //5
 console.log(f); //5