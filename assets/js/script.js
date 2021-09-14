// GIVEN I am taking a code quiz
const startBtnEd = document.getElementById("start-button");
let promptEd = document.getElementById("prompter");
let instructEd = document.getElementById("instructions");
let countDownEd = document.getElementById("count-down");

let timeRemaining = 61;

// WHEN I click the start button
startBtnEd.addEventListener("click", function(){
    
    countDownEd.style.display = "inline-block";
    setInterval(function() {
        timeRemaining--;
        console.log(timeRemaining);
        countDownEd.innerHTML = timeRemaining;

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