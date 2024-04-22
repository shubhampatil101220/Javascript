## first project of DOM by chai aur code

# Project link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode-rcr3ow?file=1-colorChanger%2Fchaiaurcode.js)

## Project 1 Solution
```javascript
const buttons =document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function(button){
  console.log(button);
  button.addEventListener('click', function(event){
    console.log(event);
    console.log(event.target)
    console.log(event.target.id)


    // if(event.target.id ==="grey"){
    //   body.style.background =event.target.id
    // }
    // if(event.target.id ==="white"){
    //   body.style.background =event.target.id
    // }
    // if(event.target.id ==="blue"){
    //   body.style.background =event.target.id
    // }
    // if(event.target.id ==="yellow"){
    //   body.style.background =event.target.id
    // }
    switch (event.target.id) {
      case "grey":{
        body.style.background =event.target.id
        break;
      } 
      case "white":{
        body.style.background =event.target.id
        break;
      } 
      case "blue":{
        body.style.background =event.target.id
        break;
      } 
      case "yellow":{
        body.style.background =event.target.id
        break;
      } 

  }

    
    
  });
})
```
## Project 2 Solution

```javascript

const form =document.querySelector('form');
const result = document.querySelector('#results');
form.addEventListener('submit', function(event){
  event.preventDefault()
  const height = parseInt(document.querySelector('#height').value);
  const weight = (document.querySelector('#weight').value);
  console.log(height)
  console.log(weight)
  if(!height){
    result.innerHTML ="please add valid input"
  }else if(!weight){
    result.innerHTML ="please add valid input"
  } else{
   
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //show the result
    result.innerHTML = `<span>${bmi}</span>`;
  }



})

```
## Project 3 Solution

```javascript
const clock = document.getElementById('clock');

setInterval(function(){
  const date = new Date().toLocaleTimeString();
  clock.innerHTML =date;
  console.log(date)
},1000)

```