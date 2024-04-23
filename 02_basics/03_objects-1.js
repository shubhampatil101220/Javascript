//to declare an objecct there are two ways using literals and constructor

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

//Object.create() method: This method creates a new object, using an existing object as the prototype of the newly created object.
let newUser =Object.create(JsUser)
console.log("Object.create()",newUser);


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




// ===============Interview Questions========================
/*
how to freeze sepcific field in object to not modify that value
*/
let user={
    id:132,
    name:"shubham",
    occupation:"worker"
  }
  user.id=500;
  //Object.freeze(user) this freezes the whole object
  
  //for multiple field used defineproperties
  Object.defineProperties(user,{id:{writable:false}}) //this changes the property of writable
  
  //or 

  //for single field used defineproperties
  Object.defineProperty(user,'name',{writable:false}) //this changes the property of writable

  user.id=300;
  
  console.log(user);
console.log(Object.getOwnPropertyDescriptor(user,"id"));  //defineProperties
console.log(Object.getOwnPropertyDescriptor(user,"name")); //defineProperty


/**
 *  writable: false, //this stops the changing the value
 * enumerable: true, //this prevents from the iteration
 * configurable: true
 */