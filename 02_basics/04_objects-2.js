//singleton object
let user= new Object();
console.log(user);
//non-singleton object
let user1 ={};
console.log(user1);


//to access the object of object 
let employee = {
    fullname:{
        firstname:"shuhbam",
        middlename:"shankar",
        lastname:"patil"
    },
    age:22,
    work:"chai piyo biscuit khawww"

}

console.log(employee.fullname);
console.log(employee.fullname.firstname);

//to merger the two or more objects use assign method
let obj1 ={1:"a",2:"b",3:"c"};
let obj2 ={3:"c",4:"d",5:"e"};
let obj3 ={5:"e",6:"f",1:"a"};

// merged objects don't have repeated value data is sorted in aascending format on keys
let obj4 = Object.assign(obj2,obj3,obj1);
console.log(obj4);

//we can also achieve this by spread
let obj5 ={...obj1,...obj3,...obj2};
console.log(obj5);

//we can create object inside the object
let obj6 = {obj1,obj2,obj3}

//to get the all the values of an object you use this
console.log(Object.keys(obj5));
//same for the values of an object
console.log(Object.values(obj5));
//checking the entries in array format
console.log(Object.entries(obj5));

//checking the key data available in object
console.log(obj5.hasOwnProperty(2)); //true



//Destructuring in objects
//method1
const {work} = employee;
console.log(work);
//method2
const {work:specialwork} = employee;
console.log(specialwork);