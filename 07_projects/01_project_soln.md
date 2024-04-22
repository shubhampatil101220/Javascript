## first project of DOM by chai aur code

# Project link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode-rcr3ow?file=1-colorChanger%2Fchaiaurcode.js)

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