var startButton = document.getElementById("start-button");

var restartButton = document.getElementById("restart");

var submitButton = document.getElementById("submit");

var userScore = document.getElementById("user-score");

var points = document.getElementById("score");

var pointsCounter = 0

var scoreContainer = document.querySelector(".score-container");

var startPage = document.querySelector(".start-page");

var timeDisplay = document.getElementById("time-display");

var displayContainer = document.getElementById("display-container");

var numberOfQuestions = document.querySelector(".number-of-question");

var questionEl = document.getElementById("question-container");

var questionSpot = document.getElementById("question-spot");

var responseButtons = document.querySelectorAll(".response");

var buttonContainer = document.querySelector('#response-buttons');

var questionIndex = -1

var counter = 30

var interval;

var questionArr=[
    {   question: "What does JS stand for?",
        responses: ["Jersey Shore", "JavaScript", "John Sheriden", "John Sinclair"], 
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
    for(var i=0; i < currentQuestion.responses.length; i++) {
        responseButtons[i].textContent = currentQuestion.responses[i]
    }
}

//(function(){
    // var sec = 60;
    function startCountdown() {

         interval = setInterval(() => {
            timeDisplay.textContent = counter
            console.log(counter);
            counter--;

            if (counter === -1) {
            clearInterval(interval);
            endQuiz()
            }
        }, 1000);
    }

    // document.get.addEventListener('click', function(){
    //     sec = -5;
    //     document.getElementById('timeDisplay').innerHTML='00:' + sec;
    // });
//})();


function nextQuestion() {
    //If (condition) if conditions is true, run the code
    if (questionIndex < questionArr.length -1) {
        questionIndex++;
        displayQuestion();

    }
    else {
        endQuiz()
        clearInterval(interval)
    }
}



restartButton.addEventListener("click", function(restart) {
    location.reload();
})


startButton.addEventListener("click", function(event) {
    console.log(event)
    questionEl.style.display = "block";
    startCountdown();
    nextQuestion();
    startButton.style.display ='none'
})

buttonContainer.addEventListener('click', function(event) {
    var userChoice = event.target.textContent
    var correctAnswer = questionArr[questionIndex].answer
    if (userChoice === correctAnswer){
        console.log('Right')
        event.target.classList.add('answer')
        setTimeout(function () {
            event.target.classList.remove('answer')
        }, 150)
        pointsCounter +=20
    }else {
        // If they choose the wrong answer
        event.target.classList.add('wrong')
        setTimeout(function() {
            event.target.classList.remove('wrong')
        }, 150)
        counter -=5
    }
    nextQuestion()
})

function endQuiz(){
    console.log('Quiz Ended')
    displayContainer.style.display = 'none';
    scoreContainer.style.display = "block";
    questionEl.style.display = 'none'
    points.textContent = pointsCounter
    localStorage.setItem('userScore', pointsCounter);
}

function getLocalStorage(){
    var previousScore = localStorage.getItem('userScore')
    console.log(previousScore)
    document.querySelector('.highscore').textContent = 'Previous Score was ' + previousScore 
} 
getLocalStorage()

//submitButton.addEventListener("click", function(event) {
//    console.log(event)
//})



