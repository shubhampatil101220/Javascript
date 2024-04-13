let React=["Saurabh","Vishvajeet","Krunal","Kalpesh"];
let Angular=["Shubham","Pratik","Rahul","Vishal"];

// to merge the two arrays we use concat method 

let Developer = React.concat(Angular);
console.log("concat",Developer);
/*
concat [
  'Saurabh',
  'Vishvajeet',
  'Krunal',
  'Kalpesh',
  'Shubham',
  'Pratik',
  'Rahul',
  'Vishal'
]

*/
//we can only merge two of arrays using the concat method for that there is an another method "spread Method"
let first=[0,1,2,3];
let second=[4,5,6,7];
let third =[8,9,10,11]

let spread =[...first,...second,...third];
console.log(spread);
/*
[
   0,  1, 2, 3, 4,
   5,  6, 7, 8, 9,
  10, 11
]
*/
//Flat method makes the complex array into a single array
let complexArray=[1,2,3,[4,5,6,[7,8,9]],10,11]
let simpleArray=complexArray.flat(Infinity);
console.log(simpleArray);
/*
[
   1, 2, 3, 4,  5,
   6, 7, 8, 9, 10,
  11
]
*/
//isArray method return the boolean value 
console.log(Array.isArray(simpleArray)); //true

//from making the array from string

console.log(Array.from("shubham")); 
//[ 's', 'h', 'u', 'b', 'h', 'a', 'm']


//of method makes the variables into an array
let a=25;
let b=35;
let c=45;

let arrayNum = Array.of(a,b,c);
console.log(arrayNum);