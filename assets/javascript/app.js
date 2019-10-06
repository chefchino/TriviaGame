

// set global variables
var correct = 0;
var incorrect = 0;
var timer = 30;
var intervalId ;
var foodQuestions = [{
    question: "Where do Spaghetti and Meatballs come from?",
    answers: ["Naples, Italy", "Marseille, France", "Buenos Aires, Agrentina", "New Jersey, USA"],
    correctAnswer: "New Jersey, USA",
},
{
    question: "Who was dubbed Chef of the Century in the last 10 years?",
    answers: ["Paul Bocuse", "Rachel Ray", "Anthony Bourdain", "Andrew Zimmerman"],
    correctAnswer: "Paul Bocuse",
},
{
    question: "Which city of the world has the most Michellin Stars?",
    answers:["Paris, France", "New York City, New York", "Los Angeles, California", "Tokyo, Japan"],
    correctAnswer: "Tokyo, Japan"
},
{
    question: "Which of the following is a vegetable NOT created by man?",
    answers:["Brocolli", "Cauliflour"]
}]
// build a timer to countdown time left to answer question
function startGame(){
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
}
function decrement(){
    timer--;
    $(".timer").html("<h3>" + timer + "</h3>");

    if(timer === 0){
        stop();
    }
}
function stop() {
    clearInterval(intervalId);
}
startGame();
// create questions to be asked
// give multiple choice and/or true false answers
// if correct answer is selected count +1 for correct answers, display giphy that says correct, timeout to next question
// if incorrect answer is selected count +1 for incorrect answers, display "wrong", display correct answer, timeout to next question
// when timer reaches 0, display correct answer, count +1 to incorrect answer, display correct answer, timeout to next question
// after all questions have looped through display number of correct answers verse incorrect answers, give option to restart without refresh