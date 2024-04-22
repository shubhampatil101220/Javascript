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
## Project 4 Solution

```javascript

let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('PLease enter a valid number');
  } else if (guess < 1) {
    alert('PLease enter a number more than 1');
  } else if (guess > 100) {
    alert('PLease enter a  number less than 100');
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over. Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You guessed it right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is TOOO low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is TOOO High`);
  }
}

function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess}, `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess} `;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess} `;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);

    playGame = true;
  });
}



```