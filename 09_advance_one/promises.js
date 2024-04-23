const promiseone = new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task is completed");
        resolve();        //used to go block
    })
});

promiseone.then(
    function(){
        console.log("promise consumed");
    }
)
//second approach top create the promises without using the variables
new Promise(function(resolve,reject){
    setTimeout(() => {
        console.log("Async 2 task is completed");
        resolve();                         //used to go then block
    }, 1000);
}).then(function(){                       // if everything is fine then it gets called
    console.log("promise 2 consumed");
    
})

//third promise  with catch and finally
new Promise(function(resolve,reject){
    setTimeout(() => {
        console.log("Async 3 task is completed");
        resolve();                       //used to go then block
        reject();                        //used to go catch block
    }, 1000);
}).then(function(){                       // if everything is fine then it gets called
    console.log("promise 3 consumed");
    
}).catch(function(){                      //catch works when an error occurs then it gets called
    console.log("promise 3 rejected");               
}).finally(function(){                     //finally works always whether promise resolved or rejected
    console.log("promise 3 finally called");
})


//passsing the object in promises
const fourthPromise = new Promise(function(resolve,reject){
    setTimeout(()=>{
        console.log("async 4 th task is completed");
        resolve({id:123,name:"shubham",email:"shubham@gmail.com"});
        reject("Something went wrong");
    },1000)
});

fourthPromise.then((user)=>{
    console.log("4 th promise username is :",user.name);
    return user.name;  //this value shifted to next chain 
}).then((username)=>{  //we can also chain the then promise with another then
    console.log("chain log",username);
})

//demonstrating the catch block
const fifthPromise = new Promise(function(resolve,reject){
    setTimeout(() => {
        let login =false;
        if(login){
            resolve("User is  logged in....Congratulations!")
        }else{
            reject('User is not logged in ....Failed!')
        }
    }, 1000);
})

fifthPromise.then((message)=>{
    console.log(message);
}).catch((message)=>{

    console.log(message);

    //it will throw an error
}).finally(()=>{
    console.log("finally block of 5th promise");
})


// Using async and await in promises rather than 'then' and 'catch' blocks

const sixthPromise = new Promise((resolve,reject)=>{
    setTimeout(() => {
        let login =false;
        if(login){
            resolve({id:123,name:"rahul",email:"shubham@gmail.com"})
        }else{
            reject('User is not logged in ....Failed! 6th promise')
        }
    }, 1000);
})

async function consumedSixthPromise(){
    
   try {
    const response = await sixthPromise;
    console.log(response);
   } catch (error) {
    console.log(error);
   }
}
consumedSixthPromise()


async function getAllUsers(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')

        const data = await response.json()
        console.log(data);
    } catch (error) {
        console.log("E: ", error);
    }
}

