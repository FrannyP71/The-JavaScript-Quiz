var startButton=document.getElementById("start-button")
var timeLeft=60
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




startButton.addEventListener("click", function(event) {
    console.log(event)
})