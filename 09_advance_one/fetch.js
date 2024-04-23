fetch('https://jsonplaceholder.typicode.com/users')
.then(function(response){
    return response.json();
}).then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log(error);
}).finally(function(connection){
    console.log("Database closed");
})