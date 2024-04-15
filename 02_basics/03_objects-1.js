//to declare an objecct there are two ways using literals and constructor
//constructor way or singelton method
// Object.create(obUser)
// console.log(obUser);


//literal way
let JsUser ={
    name: "shubham",
    "fullname":"shubham patil",
    age:24,
    occupation:"intern"
}
console.log(JsUser);
//two ways to access the data in object using '.' and '[]'
console.log(JsUser.name);   
//we cannnot access the fullname using . operator for that we use [""] we can also access the other element also   
console.log(JsUser["fullname"]);
console.log(JsUser["occupation"]);

//interview question
/*
Take an symbol variable and use this symbol as a key in object
*/
let mySymbol = Symbol("mykey");

let JsUser2 ={
    name: "omkar",
    "fullname":"shubham patil",
    age:24,
    occupation:"intern",
    [mySymbol] :"mykey1",
}
console.log(JsUser2);
//to display or access the symbol dataype in object use [] notation
console.log(JsUser2[mySymbol]);


//to change the any vlaue of the object we use following syntax
JsUser2.fullname ="Omkar Gudale";
JsUser2["age"] =15;
console.log(JsUser2);

Object.freeze(JsUser);
 JsUser.fullname="tere naam"; 
//now it would not change because we freezed the object then object cannot modified



// =====================Functions========================
JsUser2.greeting = function () {
    console.log("Hello user");
}
JsUser2.greetingTWO = function () {
    console.log(`Hello user ${JsUser.name}`);
}
//to refernce the same object use 'this.'
JsUser2.greetingThree = function () {
    console.log(`Hello user ${this.name}`);
}
console.log(JsUser2.greeting);
console.log(JsUser2.greeting()); //Hello user
console.log(JsUser2.greetingTWO()); //hello user shubham
console.log(JsUser2.greetingThree()); //hello user omkar
console.log( typeof JsUser2.greeting); //function