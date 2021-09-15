// GIVEN I am taking a code quiz
const startBtnEd = document.getElementById("start-button");
let promptEd = document.getElementById("prompter");
let instructEd = document.getElementById("instructions");
let countDownEd = document.getElementById("count-down");

let timeRemaining = 61;

// create objects containing questions and answers.
let questionOne = {
    question: "What language is used for styling elements?"
    wrongOne: ""
}

// WHEN I click the start button
startBtnEd.addEventListener("click", function(){
    
    countDownEd.style.display = "inline-block";
    setInterval(function() {
        timeRemaining--;
        console.log(timeRemaining);
        countDownEd.innerHTML = timeRemaining;

        //create an array of question objects. set prompter as question, set options as ul with options.

        //if correct, next, add it to score

        //if wrong, don't add to score, reduce 10 seconds.

        //total score = correct answers * time remaining/10.

        //if no more questions are in array, final screen

        //if out of time, final screen


        if (timeRemaining === 0) {

            // add message and end function
        }
        
    }, 1000);
    

// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0

})
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and my score