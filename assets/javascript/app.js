$(document).ready(function () {
    questions = {
        question1: {
            question: "In what year did World War II end?",
            answerImg: "http://wd4eui.com/Pictures/Char_Obs_Aug_1945.jpg",
            correctAnswer: 1945,
            answerOption1: 1963,
            answerOption2: 1919,
            answerOption3: 1945,
            answerOption4: 1933
        },

        question2: {
            question: "Who is Australia's current Prime Minister?",
            answerImg: "source",
            correctAnswer: "Scott Morrison",
            answerOption1: "Tony Abbott",
            answerOption2: "Scott Morrison",
            answerOption3: "Kevin Rudd",
            answerOption4: "Julia Gillard"
        },

        question3: {
            question: "Which is the only US state borders only one other?",
            answerImg: "source",
            correctAnswer: "Maine",
            answerOption1: "Alaska",
            answerOption2: "Hawaii",
            answerOption3: "Florida",
            answerOption4: "Maine"
        },

        question4: {
            question: "Donald Trump's current term as US President ends in what year?",
            answerImg: "source",
            correctAnswer: "2021",
            answerOption1: "2020",
            answerOption2: "2022",
            answerOption3: "2021",
            answerOption4: "2025"
        },

        question5: {
            question: "Mt. Everest sits on the border of which two countries?",
            answerImg: "source",
            correctAnswer: "Nepal and China",
            answerOption1: "India and China",
            answerOption2: "India and Nepal",
            answerOption3: "Nepal and China",
            answerOption4: "Russia and China"
        }
    }

    var timeRemaining;
    var countdownTimer;

    function startCountDown() {
        timeRemaining = 30;
        countdownTimer = setInterval(function () {
            timeRemaining--;
            $("#timer").text(timeRemaining);
            if (timeRemaining === 0) {
                timeoutScreen();
            }
        }, 1000);
    }

    var questionCount = Object.keys(questions).length; //total number of questions
    var questionPicker; //= Math.round(Math.random(Object.keys(questions).length)); //generates number by which property is picked from question object
    var currentQuestion;

    var questionHistory = []; //Array to store history of questions already asked

    function newQuestion() {
        clearInterval(gameOverTimer);
        clearInterval(timeoutTimer);
        clearInterval(correctScreenTimer);
        clearInterval(lossScreenTimer);
        $(".gameContent").empty();
        clearInterval(countdownTimer);
        startCountDown();
        for (i = 0; (questionHistory.length === 0 && i === 0) || (questionHistory.length > 0 && questionHistory.indexOf(questionPicker) !== -1); i++) {
            questionPicker = Math.floor(Math.random() * questionCount);
        } //If history empty, iterate once & pick one. Else, continue picking until you find question NOT in history (indexOf = -1)
        currentQuestion = Object.keys(questions)[questionPicker];
        questionHistory.push(questionPicker);
        pageContent();
    }

    function pageContent() {
        var timerDiv = $('<p align="center">Time Remaining: <span id="timer"></span></p>');
        $(".gameContent").append(timerDiv);
        $("#timer").text(timeRemaining);

        var questionDiv = $('<h3 id="question"></h3>');
        $(".gameContent").append(questionDiv);
        $("#question").text(questions[currentQuestion].question);

        var aoDiv1 = $('<h2 class="answer" id="answerOption1" data-question="answerOption1"></h2>');
        $(".gameContent").append(aoDiv1);
        $("#answerOption1").text(questions[currentQuestion].answerOption1);

        var aoDiv2 = $('<h2 class="answer" id="answerOption2" data-question="answerOption2"></h2>');
        $(".gameContent").append(aoDiv2);
        $("#answerOption2").text(questions[currentQuestion].answerOption2);

        var aoDiv3 = $('<h2 class="answer" id="answerOption3" data-question="answerOption4"></h2>');
        $(".gameContent").append(aoDiv3);
        $("#answerOption3").text(questions[currentQuestion].answerOption3);

        var aoDiv4 = $('<h2 class="answer" id="answerOption4" data-question="answerOption4"></h2>');
        $(".gameContent").append(aoDiv4);
        $("#answerOption4").text(questions[currentQuestion].answerOption4);
    }//executes eachtime page contnet must be initialised or changed


    var selectedAnswer;

    $(document).on("click", '.answer', function (event) {
        selectedAnswer = this.id;
        if (questions[currentQuestion][selectedAnswer] === questions[currentQuestion].correctAnswer) {
            correctScreen();
        } else {
            lossScreen();
        }
    })

    var correctScreenTimer;
    var correctCount = 0;

    function correctScreen() {
        correctCount++;
        clearInterval(countdownTimer);
        $(".gameContent").empty();
        var winMessage = $('<h2> Congratulations! ' + questions[currentQuestion].correctAnswer + ' was the correct answer.</h2>');
        $(".gameContent").append(winMessage);
        if (questionHistory.length < questionCount) {
            correctScreenTimer = setInterval(newQuestion, 1000 * 5);
        } else {
            correctScreenTimer = setInterval(gameOverScreen, 1000 * 5);
        }
    }

    var lossScreenTimer;
    var lossCount = 0;

    function lossScreen() {
        lossCount++;
        clearInterval(countdownTimer);
        $(".gameContent").empty();
        var lossMessage = $('<h2> Sorry, wrong answer! You guessed ' + questions[currentQuestion][selectedAnswer] + '. The correct answer was ' + questions[currentQuestion].correctAnswer + '.</h2>');
        $(".gameContent").append(lossMessage);
        if (questionHistory.length < questionCount) {
            lossScreenTimer = setInterval(newQuestion, 1000 * 5);
        } else {
            lossScreenTimer = setInterval(gameOverScreen, 1000 * 5);
        }
    }

    var timeoutTimer;
    var timeoutCount = 0;

    function timeoutScreen() {
        timeoutCount++;
        $(".gameContent").empty();
        var timeoutMessage = $('<h2>You\'ve run out of time! The correct answer was ' + questions[currentQuestion].correctAnswer + '. </h2>');
        $(".gameContent").append(timeoutMessage);
        if (questionHistory.length < questionCount) {
            timeoutTimer = setInterval(newQuestion, 1000 * 5);
        } else {
            timeoutTimer = setInterval(gameOverScreen, 1000 * 5);
        }
    }

    var gameOverTimer;

    function gameOverScreen() {
        $(".gameContent").empty();
        clearInterval(countdownTimer);
        clearInterval(timeoutTimer);
        clearInterval(correctScreenTimer);
        clearInterval(lossScreenTimer);
        var gameOverMessage = $('<h2>Game Over</h2><p>Correct Guesses: ' + correctCount + '</p> <p>Wrong Guesses: ' + lossCount + '</p> <p>Out of Time: ' + timeoutCount + '</p> <button class="btn btn-success newGameBtn">Play Again</button>');
        $(".gameContent").append(gameOverMessage);
        questionHistory = [];
        $(".newGameBtn").on("click", function start() {
            newQuestion();
            timeoutCount = 0;
            correctCount = 0;
            lossCount = 0;
        })
    }

    $(".startBtn").on("click", function start() {
        newQuestion();
    })

})
