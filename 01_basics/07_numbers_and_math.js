//we can assign the number by two ways
let score = 4500.0125;
let runs = new Number(13551);
console.log(score);
console.log(runs);
console.log(score.toString().length); //9
console.log(score.toFixed(2)); //4500.01
console.log(score.toPrecision(4)); //4500
console.log(runs.toLocaleString('en-IN')); //13,551

//=====================MATHS==========================
console.log(Math);
console.log(Math.abs(-9)); //9
console.log(Math.PI); //3.141592653589793
console.log(Math.pow(10,2));// 10's power of 2=100
console.log(Math.round(3.9)); //4  
console.log(Math.round(3.2)); //3
console.log(Math.ceil(3.9)); //4 round to upper value
console.log(Math.floor(3.9)); //3 round to lower value
console.log(Math.sqrt(25));  //5 squareroot
console.log(Math.min(4,6,84,45,25,4,6,8,2)); //2
console.log(Math.max(4,6,84,45,25,4,6,8,2)); //84
console.log((Math.random()*1000000).toFixed(0));// a 6 digit random number