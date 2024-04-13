let todayDate = new Date()
console.log(typeof todayDate); //object
console.log(todayDate);
console.log(todayDate.toString());
console.log(todayDate.toDateString());
console.log(todayDate.toISOString());
console.log(todayDate.toJSON());
console.log(todayDate.toLocaleString());

let myCreatedDate1 = new Date("05-22-2024");
console.log(myCreatedDate1);
let myCreatedDate2 = new Date(2023,14,2);
console.log(myCreatedDate2);
console.log(myCreatedDate2.toLocaleString());
let myCreatedDate3 = new Date(2023,14,2,5,30,58);
console.log(myCreatedDate3.toLocaleString());

let Timestamp = Date.now();
 //milisecond value from 01/01/1970 to now
console.log(Timestamp);
//seconds value from 01/01/1970 to now
console.log(Math.floor(Timestamp/1000));
//minutes value from 01/01/1970 to now
console.log(Math.floor(Math.floor(Timestamp/1000)/60));
//hours value from 01/01/1970 to now
console.log(Math.floor(Math.floor(Math.floor(Timestamp/1000)/60)/60));
//days value from 01/01/1970 to now
console.log(Math.floor(Math.floor(Math.floor(Math.floor(Timestamp/1000)/60)/60)/24));

let day = new Date();
console.log(day.getDate());
console.log(day.getDay());
console.log(day.getFullYear());
console.log(day.getMonth());
console.log(day.getMinutes());
console.log(day.getHours());
console.log(day.getSeconds());
