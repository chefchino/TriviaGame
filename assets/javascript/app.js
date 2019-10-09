// set global variables

var correct = 0;
var incorrect = 0;
var timer = 10;
var intervalId;
var foodQuestions = [{
    question: "Where do Spaghetti and Meatballs come from?",
    answer1: "Naples, Italy",
    answer2: "Marseille, France",
    answer3: "Buenos Aires, Agrentina",
    answer4: "New Jersey, USA",
    correctAnswer: 'd'
},
{
    question: "Who was dubbed Chef of the Century in the last 10 years?",
    answer1: "Paul Bocuse",
    answer2: "Rachel Ray",
    answer3: "Anthony Bourdain",
    answer4: "Andrew Zimmerman",
    correctAnswer: 'a'
},
{
    question: "Which city of the world has the most Michellin Stars?",
    answer1: "Paris, France",
    answer2: "New York City, New York",
    answer3: "Los Angeles, California",
    answer4: "Tokyo, Japan",
    correctAnswer: 'd'
},
{
    question: "Which of the following is a vegetable NOT created by man?",
    answer1: "Broccoli",
    answer2: "Cauliflour",
    answer3: "Broccolini",
    answer4: "Brussel Sprouts",
    correctAnswer: 'c'
},
{
    question: "Where does Black Pepper originate?",
    answer1: "India",
    answer2: "Italy",
    answer3: "Egypt",
    answer4: "Lebannon",
    correctAnswer: 'a'
},
{
    question: "Where are the best tomatoes in the world grown?",
    answer1: "New Jersey, USA",
    answer2: "Parma, Italy",
    answer3: "Bacelona, Spain",
    answer4: "Lima, Peru",
    correctAnswer: 'a'
},
{
    question: "Who produces the best Olive Oil?",
    answer1: "Madrid, Spain",
    answer2: "Sicily, Italy",
    answer3: "Milan, Italy",
    answer4: "Bordeaux, France",
    correctAnswer: 'b'
},
{
    question: "Who invented Caesar Dressing and where?",
    answer1: "A. Escoffier, France",
    answer2: "Caesar, Mexico",
    answer3: "Emril, Portgual",
    answer4: "Keller, New York City",
    correctAnswer: 'b'
},
{
    question: "What is MirePoix?",
    answer1: "Soup",
    answer2: "Onions, Carrots, Celery",
    answer3: "Weights used to measure flour",
    answer4: "French Canning Technique",
    correctAnswer: 'b'
},
{
    question: "What does 'Mise en Place' mean?",
    answer1: "Put in Place",
    answer2: "Prep is Life",
    answer3: "Precise execution",
    answer4: "Chef's Life",
    correctAnswer: 'a',
}]
var lastQuestion = foodQuestions.length - 1;
var runningQuestion = 0;
var gameOver = $(".gameOver")
var jumbotron = $(".jumbotron")

function nextQuestion() {
    var food = foodQuestions[runningQuestion];
    timer = 10;
    $(".question").html(food.question);
    $("#a").html(food.answer1);
    $("#b").html(food.answer2);
    $("#c").html(food.answer3);
    $("#d").html(food.answer4);
    // gameOver.empty();

}
// $("#reset").on('click', function(){//listener for static
//     console.log("reset");
// })
$(document).on('click', "#reset", function () {//listener for dynamically generated html
    
    runningQuesiton = 0;
    correct = 0;
    incorrect = 0;
    nextQuestion();
    jumbotron.show();
    

    console.log("reset");
})
// nextQuestion();
function checkAnswer(userChoice) {
    if (userChoice == foodQuestions[runningQuestion].correctAnswer) {
        correct++;
        console.log("1", correct);
    } else {
        incorrect++;
        console.log("2", incorrect);
    }
    if (runningQuestion < lastQuestion) {
        runningQuestion++;
        nextQuestion();
    } else {
        clearInterval(intervalId);
        // alert("DONE","Correct Answers: ", correct, "Incorrect Answers: ", incorrect);
        // alert(`DONE Correct Answers: ${correct} |Incorrect Answers: ${incorrect}`);
        var feedback = $('<div>').html(`<h1>DONE</h1> <p>Correct Answers: ${correct}</p> <p>Incorrect Answers: ${incorrect}</p><button id='reset'>RESET,</button>`);
        gameOver.append(feedback);
        jumbotron.hide();
    }


    console.log({ correct, incorrect });
}
function decrement() {
    timer--;
    $(".timer").html("<h3>" + timer + "</h3>");

    if (timer === 0) {
        incorrect++;
        runningQuestion++;
        nextQuestion();
    }

}

function startGame() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
    nextQuestion();

}
startGame();

// var userChoice = $(".answers").on('click', function() {

//     if(foodQuestions[runningQuestion].correctAnswer === userChoice){
//         correct++;
//         nextQuestion();
//         console.log("1",userChoice);
//     }else{
//         incorrect++;
//         nextQuestion();
//     }
// })


// }
// function startGame(){

//   nextQuestion();


// }
// startGame();