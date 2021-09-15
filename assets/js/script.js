// GIVEN I am taking a code quiz
const startBtnEd = document.getElementById("start-button");
let promptEd = document.getElementById("prompter");
let instructEd = document.getElementById("instructions");
let countDownEd = document.getElementById("count-down");
let optionsEd = document.getElementById("options");
let correctEd = document.getElementById("correct")

let timeRemaining = 61;

console.log(promptEd.innerHTML);

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
    wrongTwo: "title",
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

let questionsDone;
let wrongAnswers = 0;
let rightAnswers = 0;
let moreQuestions = true;
let optionList;

function end() {
    promptEd.innerHTML = "SCORE:"

}

function timer(){ setInterval(function() {
        if(moreQuestions && timeRemaining > 0){
            timeRemaining--;
            console.log(timeRemaining);
            countDownEd.innerHTML = timeRemaining;
            
            //create an array of question objects. set prompter as question, set options as ul with options.
            

            //if correct, next, add it to score

            //if wrong, don't add to score, reduce 10 seconds.

            //total score = correct answers * time remaining/10.

            //if no more questions are in array, final screen

            //if out of time, final screen

        }

        else if (timeRemaining === 0) {
            clearInterval();
            end();
            optionList.remove()
            return;
            // add message and end function
        }
        
        else if (!moreQuestions){
            clearInterval();
            return;
        }
    }, 1000);
}

// WHEN I click the start button
//create a function that puts up questions
function questgen(){
        let randIndex = Math.floor(Math.random() * questArr.length);
        let currentQuest = questArr[randIndex];
        promptEd.innerHTML = currentQuest.question;
        optionList = document.createElement("ul");
        optionList.setAttribute("style", "padding: 20px; display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center; width: 50%; margin: 0 auto")
        let optionAzar;
        let possAnswers = [currentQuest.wrongOne, currentQuest.wrongTwo,
         currentQuest.wrongThree, currentQuest.correct];
         while (possAnswers.length){
            let indexAzar = Math.floor(Math.random() * possAnswers.length);
             optionAzar = document.createElement("li");
             optionAzar.innerHTML = possAnswers[indexAzar];
             optionAzar.setAttribute("style", "border: solid black 2px; padding: 5px 10px; background-color: purple; color: white; cursor: grab")
             optionAzar.setAttribute("class", "possibility")
             possAnswers.splice(indexAzar, 1);
             optionList.appendChild(optionAzar);
         }
    
             
        optionsEd.appendChild(optionList);

        //add event listener for click, if target = correct answer, good, incorrect, bad.
        console.log(currentQuest.correct);
        optionList.addEventListener("click", function(e){
            let selection = e.target;
            console.log(selection.innerHTML);
            if (selection.innerHTML === currentQuest.correct){
                rightAnswers++;
                correct.innerHTML = "Correct!";
                correct.setAttribute("style", "background-color: green; color: white; font-size: 3em; bottom: 0; padding: 30px; text-align: center; position: absolute; display: block;");
            }
            else{
                wrongAnswers++;
                timeRemaining -= 10;
                correct.innerHTML = "Incorrect!";
                correct.setAttribute("style", "background-color: red; color: white; font-size: 3em; bottom: 0; padding: 30px; text-align: center; position: absolute; display: block;");
            };
            setInterval(function() {
                correct.innerHTML = "";
                correct.setAttribute("style", "display: none;")
                clearInterval();
                
            }, 500);

            questArr.splice(randIndex, 1);
            optionList.remove();

            if (questArr.length) {
                questgen();
            }
            else{
                moreQuestions = false;
                end();
            }

            console.log(rightAnswers);
        })

//         
    
   
}
startBtnEd.addEventListener("click", function(){
    startBtnEd.style.display = "none";
    instructEd.style.display = "none";
    countDownEd.style.display = "inline-block";
    questgen();
    timer();
    

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