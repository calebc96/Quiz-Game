var startButton = document.getElementById("start-btn");
var firstQuestion = document.getElementById("front-page")


var questions = [
   {
    title: 'Commonly used data types DO not include:',
    choices: ['strings', 'booleans', 'alerts', 'numbers'],
    Answers: 'alerts',
   },
   {
    title: 'The condition in an if / else statement is enclosed with______.',
    choices: ['strings', 'booleans', 'alerts', 'numbers'],
    Answers: 'alerts',
   },
   {
    title: 'arrays in JavaScript can be used to store______.',
    choices: ['strings', 'booleans', 'alerts', 'numbers'],
    Answers: 'alerts',
   },
   {
    title: 'String values must be enclosed within_______when being assigned to variables.',
    choices: ['strings', 'booleans', 'alerts', 'numbers'],
    Answers: 'alerts',
   },
   {
    title: 'A very useful tool used during development and debugging for printing content to the debugger is:',
    choices: ['strings', 'booleans', 'alerts', 'numbers'],
    Answers: 'alerts',
   },
]
var listEl = document.createElement("ol");

listE1[]

var li1 = document.createElement("li");
var li2 = document.createElement("li");
var li3 = document.createElement("li");
var li4 = document.createElement("li");

li1.textContent = "Strings";
li2.textContent = "Booleans";
li3.textContent = "alerts";
li4.textContent = "numbers";

listEl.appendChild(li1);
listEl.appendChild(li2);
listEl.appendChild(li3);
listEl.appendChild(li4);


startButton.addEventListener("click", function() {
    firstQuestion.textContent = questionOne
    firstQuestion.appendChild(listEl);

});

