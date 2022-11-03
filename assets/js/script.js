var startButton = document.getElementById("start-btn");
var questionBox = document.getElementById("front-page");
var timer = document.getElementById("keeping-time");

var questions = [
   {
    title: 'Commonly used data types DO not include:',
    choices: ['strings', 'booleans', 'alerts', 'numbers'],
    answers: 'alerts',
   },
   {
    title: 'Commonly used data types DO not include:',
    choices: ['strings', 'booleans', 'alerts', 'numbers'],
    answers: 'alerts',
   },
  
]

var secondsLeft = 100;

function setTime() {
    // Sets interval in variable
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timer.textContent = secondsLeft;
      
      if(secondsLeft === 0) {
        clearInterval(timerInterval);
      }
    }, 1000)
  }

startButton.addEventListener("click", function() {
    startquiz();
    setTime();
});


function startquiz () { 
    var myArray = JSON.stringify(questions);
    document.getElementById("front-page").textContent = myArray;
}
