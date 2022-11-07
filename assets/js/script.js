var startButton = document.getElementById("start-btn");
var questionBox = document.getElementById("front-page");
var timer = document.getElementById("keeping-time");
var quiz = document.getElementById("quiz");
var question = document.getElementById("question");
var answerList = document.getElementById("answers");
var correct = document.getElementById("Correct")
var score = 0;
var timePen = 20;
quiz.style.display = "none";

var questions = [
  {
    title: "Commonly used data types DO not include______.",
    choices: ["Strings", "Booleans", "Alerts", "Numbers"],
    answers: "Alerts",
  },
  {
    title: "The condition in an if / else statement is enclose with______.",
    choices: ["Quotes", "Curly Brackets", "Parethensis", "Square Brackets"],
    answers: "Quotes",
  },
  {
    title: "Arrays in JavaScript can be used to store______.",
    choices: [
      "Numbers and Strings",
      "Other Arrays",
      "Booleans",
      "All of The Above",
    ],
    answers: "All of The Above",
  },
  {
    title:
      "String values must be enclosed within_____when being assigned to variables.",
    choices: ["Commas", "Curley Brackets", "Quotes", "Parenthesis"],
    answers: "Quotes",
  },
  {
    title:
      "A very useful tool used during development and debugging for printing content to the debugger is:",
    choices: ["JavaScript", "Terminal/Bash", "For Loops", "console.log"],
    answers: "console.log",
  },
];

var secondsLeft = 100;

function setTime() {
  // Sets interval in variable
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timer.textContent = secondsLeft;

    if (secondsLeft === 0) {
      clearInterval(timerInterval);
      finished();
    }
    if (qIndex === 5) {
      clearInterval(timerInterval);
    }
  }, 1000);
}
//When the start button is clicked the timer runs and the questions display
startButton.addEventListener("click", function () {
  startquiz();
  setTime();
});

var qIndex = 0;

function startquiz() {
  console.log(qIndex);
  questionBox.style.display = "none";
  quiz.style.display = "flex";
  answerList.innerHTML = "";
  for (var i = 0; i < questions.length; i++) {
    var userQuestion = questions[qIndex].title;
    var userAnswers = questions[qIndex].choices;
    question.innerHTML = userQuestion;
  }
  userAnswers.forEach(function (setOfQuestions) {
    let listItem = document.createElement("li");
    listItem.innerHTML = setOfQuestions;
    answerList.appendChild(listItem);
    answerList.appendChild(correct);
    listItem.addEventListener("click", function (event) {
      let clickedOn = event.target;
      //If an answer is correct/incorrect it will add the score and show a difference in time
      if (clickedOn.textContent === questions[qIndex].answers) {
        console.log("correct");
        score = score + 20;
        correct.innerHTML = "Correct"
     
    
      } else {
        console.log("wrong");
        score = score - 20;
        secondsLeft = secondsLeft - timePen;
        correct.innerHTML = "Incorrect"
      }
      if (score <= 0) {
        score = 0;
      }
    
      qIndex++;
      if (qIndex >= questions.length) {
        finished();
        console.log("quiz over", score);
      } else {
        startquiz(qIndex);
      } 
    });
  });
}

//Once the quiz is over the highscore will be displayed in the local storage
function finished() {
  quiz.innerHTML = "";
  var h1 = document.createElement("h1");
  h1.innerHTML = "Quiz Over!";
  quiz.append(h1);
  var h4 = document.createElement("h4");
  h4.innerHTML = "Your score is: " + score;
  quiz.append(h4);
  var input = document.createElement("input");
  input.type = "text";
  input.placeholder = "Type initials here..";
  quiz.append(input);
  var button = document.createElement("button");
  button.type = "submit";
  button.textContent = "Submit";
  quiz.append(button);
  button.addEventListener("click", function () {
    var initials = input.value;
    if (initials === "") {
      alert("Please enter initials!!!");
    } else {
      var userInfo = {
        initials: initials,
        score: score,
      }; 
      localStorage.setItem("userInfo", JSON.stringify(userInfo))
    }
  });
}
