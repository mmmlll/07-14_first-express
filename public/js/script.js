var colorButton = document.querySelector('#colorButton')
colorButton.addEventListener('click', cycleBgrdColor)

var colorLabelButton = document.querySelector('#colorLabelButton')
colorLabelButton.addEventListener('click', cycleLabel)

var colorLabelText = document.querySelector('h2')
colorLabelText.addEventListener('click', checkAndCount)

var colors = ["red", "green", "blue"]
var randomColor = ''
var randomColorLabel = ''

function changeColor() {
  randomColor = colors[randomNumber()]
  document.body.style.backgroundColor = randomColor
}

var colorLabels = ["red", "green", "blue"]
function changeColorLabel() {
  randomColorLabel = colorLabels[randomNumber()]
  colorLabelText.innerHTML = randomColorLabel // or shd this be innerText or innerHTML???
}
var counter = 0
function checkAndCount() {
if (randomColor === randomColorLabel) {
  counter += 1
  console.log(counter)
}
}

function randomNumber() {
  return Math.floor(Math.random() * 3) + 0
}

function cycleBgrdColor() {
  setInterval(changeColor, 500)  // this is an in-built function
}

function cycleLabel() {
  setInterval(changeColorLabel, 500)  // this is an in-built function
}

// var btn = document.getElementById('gameButton')
// var userGuess = document.getElementById('guessingBox').value
//
// btn.addEventListener('click', higherOrLower(userGuess, 100))
// // WHY IS THE FUNCTION higherOrLower RUNNING EVEN BEFORE I CAN CLICK???
// // function that checks guessed number with the random number
// function higherOrLower (guessedNumber, randomNumber) {
//   console.log('guessedNumber is ', guessedNumber)
//   console.log('randomNumber is ', randomNumber)
//   if (guessedNumber > randomNumber) {
//     updateP('lower, random number is ', randomNumber)
//     repeatGuess(randomNumber)
//   } else if (guessedNumber < randomNumber) {
//     updateP('higher, random number is ', randomNumber)
//     repeatGuess(randomNumber)
//   } else {
//     updateP('correct, random number is ' + randomNumber)
//   }
// }
// // This function [repeats higherorlower until correct is reached]
// function repeatGuess (answer) {
//   var newGuess = prompt('Give me another number') // REMEMBER prompt returns a string, not an integer. So have to run parseInt on this variable first
//   higherOrLower(newGuess, answer)
// }
//
// // this function updates p
// function updateP (newP) {
//   var p = document.querySelector('p')
//   /* var h1 = document.getElementsByTagName("h1") // this is the
//   alternative to querySelector. looks more familiar to me */
//   p.textContent = newP
// }
// /* you can figure out the methods available to any document element by
// typing this into the Inspect terminal:
// var h1 = document.querySelector("h1")
// h1. [once you enter this, a box will pop up showing you all the methods
// available to h1] */
