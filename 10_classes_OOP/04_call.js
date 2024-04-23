function createUser(username,email,password){
   setUsername.call(this,username)      //accessing another function in a function for passing the value we have to use call & this
    this.email = email
    this.password = password
}

function setUsername(username){
    this.username = username
    console.log("called");
}

const user = new createUser("shubham","shubham@gmail.com","password@!@#")
console.log(user);