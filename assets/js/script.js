// GIVEN I am taking a code quiz
const startBtnEd = document.getElementById("start-button");
let promptEd = document.getElementById("prompter");
let instructEd = document.getElementById("instructions");
let countDownEd = document.getElementById("count-down");
let optionsEd = document.getElementById("options");

let timeRemaining = 61;

// create objects containing questions and answers.
let questionOne = {
    question: "What language is used for styling elements?",
    wrongOne: "HTML",
    wrongTwo: "Javascript",
    wrongThree: "Java",
    correct: "CSS",
};

let questionTwo = {
    question: "Which is an example of a pseudoelement?",
    wrongOne: "Titani-eh",
    wrongTwo: "<title></title>",
    wrongThree: "No such thing exists",
    correct: "::after",
};

let questionThree = {
    question: "Which is not a browser?",
    wrongOne: "Google Chrome",
    wrongTwo: "Safari",
    wrongThree: "Firefox",
    correct: "Bing",
};

let questArr = [questionOne, questionTwo, questionThree];

// WHEN I click the start button
//create a function that puts up questions
function questgen(){
        let randIndex = Math.floor(Math.random() * questArr.length);
        let currentQuest = questArr[randIndex];
        promptEd.innerHTML = currentQuest.question;
        let optionList = document.createElement("ul");
        let optionAzar;
        let possAnswers = [currentQuest.wrongOne, currentQuest.wrongTwo,
         currentQuest.wrongThree, currentQuest.correct];
         for (let i = 0; i < possAnswers.length; i++){
            let indexAzar = Math.floor(Math.random() * possAnswers.length);
             optionAzar = document.createElement("li");
             optionAzar.innerHTML = possAnswers[indexAzar];
             possAnswers.splice(indexAzar, 1);
             optionList.appendChild(optionAzar);
         }
        optionsEd.appendChild(optionList);
//         for (let i = 0; i < chosenWord.length; i++){
//           words.innerHTML += "_ ";
//             words.innerHTML.splice(i, 1, key)
    
   
}
startBtnEd.addEventListener("click", function(){
    startBtnEd.style.display = "none";
    instructEd.style.display = "none";
    countDownEd.style.display = "inline-block";
    questgen();
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