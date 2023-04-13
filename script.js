var startButton = document.getElementById("start-button");

var restartButton = document.getElementById("restart");

var userScore = document.getElementById("user-score");

var points = document.getElementById("score");

var scoreContainer = document.querySelector(".score-container");

var startPage = document.querySelector(".start-page");

var timeDisplay = document.getElementById("time-display");

var displayContainer = document.getElementById("display-container");

var numberOfQuestions = document.querySelector(".number-of-question");

var questionEl = document.getElementById("question-container");

var questionSpot = document.getElementById("question-spot");

var responseButtons = document.querySelectorAll(".response");

var questionIndex = 0

var questionArr=[
    {   question: "What does JS stand for?",
        responses: ["Jersey Shore", "John Sinclair", "John Sheriden", "JavaScript"], 
        answer: "JavaScript",
    },

    {   question: "Arrays in Javascript can be used to store?",
        responses: ["booleans", "strings", "numbers", "All of the above"], 
        answer: "All of the above",
    },

    {   question: "Commonly used data types do not include?",
        responses: ["alerts", "booleans", "numbers", "strings"], 
        answer: "alerts",
    },

    {   question: "What's an example of how to write a variable name?",
        responses: ["21jumpStreet", "jump Street", "jumpStreet", "$21JumpStreet"], 
        answer: "jumpStreet",
    },

    {   question: "Strings must be enclosed with ___?",
        responses: ["quotation marks", "parenthesis", "curly brackets", "commas"], 
        answer: "quotation marks",
    },
    //copy and paste questions
]


function displayQuestion() {
    var currentQuestion = questionArr[questionIndex]
    questionSpot.textContent = currentQuestion.question
    for(var i=0; i<currentQuestion.responses.length; i++) {
        responseButtons[i].textContent = currentQuestion.responses[i]
    }
}

function startCountdown(seconds) {
    let counter = seconds;

    const interval = setInterval(() => {
        timeDisplay.textContent = counter
        console.log(counter);
        counter--;

        if (counter == 0) {
            clearInterval(interval);
        }
    }, 1000);
}

function nextQuestion() {
    if (questionIndex < questionArr.length) {
        displayQuestion();
        questionIndex++;
    }
    else {
        points.innerHTML=score + '/' + questionArr.length;
        displayContainer.style.display = 'none';
        scoreContainer.style.display = "block";
    }
}

restartButton.addEventListener("click", function(restart) {
    location.reload();
})


startButton.addEventListener("click", function(event) {
    console.log(event)
    questionEl.style.display = "block";
    startCountdown(60);
    nextQuestion();
})

