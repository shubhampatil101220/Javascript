//In javascript Everything is an object for example function, array and string
// parent of function, array and string is Object


function multiplyby5(num){
    console.log(num*5);
}
multiplyby5.power =2 //it is working as a object here that store the value of 2 because function is also an a object

console.log(multiplyby5(5));
console.log(multiplyby5.power);
console.log(multiplyby5.prototype);

function createUser(username,score){
    this.username = username;
    this.score = score;
}

createUser.prototype.increment= function(){    //createing method like foreach map filter
    this.score++
}
createUser.prototype.printme = function(){    //createing method like foreach map filter
    console.log(`my score is :${this.score}`);
}

let shubham = new createUser("shubham",55);

console.log(shubham.printme());    //calling the method like map filter inintial score is 55 and displayed it
console.log(shubham.increment());        //dcore is increased by 1
console.log(shubham.printme());         // displaying it


/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/