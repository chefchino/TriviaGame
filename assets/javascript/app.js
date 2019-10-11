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
    correctAnswer: 'd',
    imgFood:  "assets/images/spaghetti-and-meatballs_hero.jpg",
},
{
    question: "Who was dubbed Chef of the Century in the last 10 years?",
    answer1: "Paul Bocuse",
    answer2: "Rachel Ray",
    answer3: "Anthony Bourdain",
    answer4: "Andrew Zimmerman",
    correctAnswer: 'a',
    imgFood: "assets/images/17-paul-bocuse-tattoo.w1200.h630.jpg",
},
{
    question: "Which city of the world has the most Michellin Stars?",
    answer1: "Paris, France",
    answer2: "New York City, New York",
    answer3: "Los Angeles, California",
    answer4: "Tokyo, Japan",
    correctAnswer: 'd',
    imgFood: "assets/images/Think-Japan-Tokyo-521830667-SeanPavonePhoto-copy.jpg"
},
{
    question: "Which of the following is a vegetable NOT created by man?",
    answer1: "Broccoli",
    answer2: "Cauliflour",
    answer3: "Broccolini",
    answer4: "Brussel Sprouts",
    correctAnswer: 'c',
    imgFood: "assets/images/Broccolini.jpg"
},
{
    question: "Where does Black Pepper originate?",
    answer1: "India",
    answer2: "Italy",
    answer3: "Egypt",
    answer4: "Lebannon",
    correctAnswer: 'a',
    imgFood: "assets/images/Malabar-Black-Pepper.jpg"
},
{
    question: "Where are the best tomatoes in the world grown?",
    answer1: "New Jersey, USA",
    answer2: "Parma, Italy",
    answer3: "Bacelona, Spain",
    answer4: "Lima, Peru",
    correctAnswer: 'a',
    imgFood: "assets/images/jersey_tomato.jpg"
},
{
    question: "Who produces the best Olive Oil?",
    answer1: "Madrid, Spain",
    answer2: "Sicily, Italy",
    answer3: "Milan, Italy",
    answer4: "Bordeaux, France",
    correctAnswer: 'b',
    imgFood: "assets/images/olive_tree.jpg"
},
{
    question: "Who invented Caesar Dressing and where?",
    answer1: "A. Escoffier, France",
    answer2: "Caesar, Mexico",
    answer3: "Emril, Portgual",
    answer4: "Keller, New York City",
    correctAnswer: 'b',
    imgFood: "assets/images/mexican-caesar-feature.jpg"
},
{
    question: "What is MirePoix?",
    answer1: "Soup",
    answer2: "Onions, Carrots, Celery",
    answer3: "Weights used to measure flour",
    answer4: "French Canning Technique",
    correctAnswer: 'b',
    imgFood: "assets/images/mirepoix.jpg"
},
{
    question: "What does 'Mise en Place' mean?",
    answer1: "Put in Place",
    answer2: "Prep is Life",
    answer3: "Precise execution",
    answer4: "Chef's Life",
    correctAnswer: 'a',
    imgFood: "assets/images/mise.jpg"    
}]
var lastQuestion = foodQuestions.length - 1;
var runningQuestion = 0;
var gameOver = $(".gameOver")
var jumbotron = $(".jumbotron")
var answers = $(".answers")
var timeOut;
document
function nextQuestion() {
    clearInterval(intervalId);
    timer = 5;
    intervalId = setInterval(decrement, 1000);
    
    // clearTimeout(timeOut);
    $(".answers").empty();
    $(".answers").append($("<button class='choice' id='a' onclick= checkAnswer('a')></button>"),$("<button class='choice' id='b' onclick= checkAnswer('b')></button>"),$("<button class='choice' id = 'c' onclick= checkAnswer('c')></button>"),$("<button class= 'choice' id= 'd' onclick= checkAnswer('d')></button>"))
    var food = foodQuestions[runningQuestion];
    
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

// nextQuestion();
function checkAnswer(userChoice) {
    if (userChoice == foodQuestions[runningQuestion].correctAnswer) {
        correct++;
        $(".answers").empty();
        var image= $("<img>").attr("src",foodQuestions[runningQuestion].imgFood);
        $(".answers").append("<h1 id='WINNER'>YOU GOT IT!!!</h1>")
        $(".answers").append(image);
        
        console.log("1", correct);
    } else {
        incorrect++;
        $(".answers").empty();
        var image= $("<img>").attr("src",foodQuestions[runningQuestion].imgFood);
        $(".answers").append("<h1 id='LOSER'>'THAT IS A MISS!!!'</h1>")
        $(".answers").append(image);
        console.log("2", incorrect);

    }
     timeOut = setTimeout(function() {
        console.log("here");
        if (runningQuestion < lastQuestion) {
            runningQuestion++;
            nextQuestion();
            console.log("question");
        } else {
            clearInterval(intervalId);
            var feedback = $('<div>').html(`"<h1>DONE</h1> <p>Correct Answers: ${correct}</p> <p>Incorrect Answers: ${incorrect}</p>`);
            gameOver.append(feedback);
            jumbotron.hide();
        }
    }, 3000);

    


    console.log({ correct, incorrect });
}
function decrement() {
    timer--;
    $(".timer").html("<h3>" + timer + "</h3>");

    if (timer === 0) {
        incorrect++;
        clearInterval(intervalId);
        $(".answers").empty();
        var image= $("<img>").attr("src",foodQuestions[runningQuestion].imgFood);
        $(".answers").append("<h1 id='TIME'>'TIME IS UP!!!'</h1>")
        $(".answers").append(image);
        console.log("outoftime");
        timeOut = setTimeout(function() {
            console.log("here");
            if (runningQuestion < lastQuestion) {
                runningQuestion++;
                nextQuestion();
                console.log("question");
            } else {
                clearInterval(intervalId);
                var feedback = $('<div>').html(`"<h1>DONE</h1> <p>Correct Answers: ${correct}</p> <p>Incorrect Answers: ${incorrect}</p>`);
                gameOver.append(feedback);
                jumbotron.hide();
            }
        }, 3000);
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