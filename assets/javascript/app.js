$(document).ready(function () {
    questions = {
        question1: {
            question: "In what year did World War II end?",
            answerImg: "data:image/jpeg;base64,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",
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
            question: "Which is the only US state that shares a border with only one other state?",
            answerImg: "source",
            correctAnswer: "Maine",
            answerOption1: "Alaska",
            answerOption2: "Hawaii",
            answerOption3: "Florida",
            answerOption4: "Maine"
        },

        question4: {
            question: "Donald Trump's current term as US President ends in what year?",
            answerImg: "data:image/jpeg;base64,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",
            correctAnswer: "2021",
            answerOption1: "2020",
            answerOption2: "2022",
            answerOption3: "2021",
            answerOption4: "2025"
        },

        question5: {
            question: "Mt. Everest sits on the border of which two countries?",
            answerImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc194EoHX1qJThM5pxiB44DmrtysBqcXu-xx_03Tmwi0NjmDv7RA",
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
        var timerDiv = $('<h4 align="center">Time Remaining: <span id="timer"></span></h4>');
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
        var winMessage = $('<h2> Congratulations! ' + questions[currentQuestion].correctAnswer + ' is the correct answer.</h2><img id="answerImg" class="img-fluid img-thumbnail">');
        $(".gameContent").append(winMessage);
        $("#answerImg").attr("src", questions[currentQuestion].answerImg);
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
        var lossMessage = $('<h2> Sorry, wrong answer! You guessed ' + questions[currentQuestion][selectedAnswer] + '. The correct answer is ' + questions[currentQuestion].correctAnswer + '.</h2>');
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
        var timeoutMessage = $('<h2>You\'ve run out of time! The correct answer is ' + questions[currentQuestion].correctAnswer + '. </h2>');
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
