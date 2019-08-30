$(document).ready(function () {
    questions = [
        question1 = {
            question: "In what year did World War II end?",
            correctAnswerImg: "https://media.giphy.com/media/3o6Zt01xXnNM3cFuc8/giphy.gif",
            incorrectAnswerImg: "https://media.giphy.com/media/EXHHMS9caoxAA/giphy.gif",
            timeoutAnswerImg: "https://media.giphy.com/media/3ornjXizVZDbngmjRK/giphy.gif",
            correctAnswer: 1945,
            answerOption1: 1963,
            answerOption2: 1919,
            answerOption3: 1945,
            answerOption4: 1933
        },

        question2 = {
            question: "Who is Australia's current Prime Minister?",
            correctAnswerImg: "https://media.giphy.com/media/fdLJGv7vyErSbzkYXY/giphy.gif",
            incorrectAnswerImg: "https://media.giphy.com/media/HrydPrw0zphAs/giphy.gif",
            timeoutAnswerImg: "https://media.giphy.com/media/fHf6hJirkeqpeL0QPa/giphy.gif",
            correctAnswer: "Scott Morrison",
            answerOption1: "Tony Abbott",
            answerOption2: "Scott Morrison",
            answerOption3: "Kevin Rudd",
            answerOption4: "Julia Gillard"
        },

        question3 = {
            question: "Which is the only US state that shares a border with only one other state?",
            correctAnswerImg: "https://media.giphy.com/media/fjxu2NuXWuWtsa9Cm1/giphy.gif",
            incorrectAnswerImg: "https://media.giphy.com/media/N35rW3vRNeaDC/giphy.gif",
            timeoutAnswerImg: "https://media.giphy.com/media/xAsQU9jATql1e/giphy.gif",
            correctAnswer: "Maine",
            answerOption1: "Alaska",
            answerOption2: "Hawaii",
            answerOption3: "Florida",
            answerOption4: "Maine"
        },

        question4 = {
            question: "Donald Trump's current term as US President ends in what year?",
            correctAnswerImg: "https://media.giphy.com/media/l0MZdQSxiGv5H5LYk/giphy.gif",
            incorrectAnswerImg: "https://media.giphy.com/media/Q8OIR3s0hT5p6/giphy.gif",
            timeoutAnswerImg: "https://media.giphy.com/media/l2Sq2ZzwVBSpkDlIs/giphy.gif",
            correctAnswer: "2021",
            answerOption1: "2020",
            answerOption2: "2022",
            answerOption3: "2021",
            answerOption4: "2025"
        },

        question5 = {
            question: "Mt. Everest sits on the border of which two countries?",
            correctAnswerImg: "https://media.giphy.com/media/kYuGsNb3vWT8Q/giphy.gif",
            incorrectAnswerImg: "https://media.giphy.com/media/6tMe6PtimsGuk/giphy.gif",
            timeoutAnswerImg: "https://media.giphy.com/media/RgnTXvE24wFjUhB3Dt/giphy.gif",
            correctAnswer: "Nepal and China",
            answerOption1: "India and China",
            answerOption2: "India and Nepal",
            answerOption3: "Nepal and China",
            answerOption4: "Russia and China"
        }
    ] //Array that contains objects for question data

    var timeRemaining;
    var countdownTimer;

    function startCountDown() {
        timeRemaining = 20;
        countdownTimer = setInterval(function () {
            timeRemaining--;
            $("#timer").text(timeRemaining);
            if (timeRemaining === 0) {
                timeoutScreen();
            }
        }, 1000);
    } //Sets time allowed to answer question

    var questionCount = Object.keys(questions).length; //total number of questions
    var questionPicker; //generates number by which property is picked from question object
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
    } //Function that clears timer intervals, sets a new question

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
    }//executes each time page content for questions must be initialised or changed


    var selectedAnswer;

    $(document).on("click", '.answer', function (event) {
        selectedAnswer = this.id;
        if (questions[currentQuestion][selectedAnswer] === questions[currentQuestion].correctAnswer) {
            correctScreen();
        } else {
            lossScreen();
        }
    }) //Executes on clicking answer to check whether answer correct and take appropriate action

    var correctScreenTimer;
    var correctCount = 0;

    function correctScreen() {
        correctCount++;
        clearInterval(countdownTimer);
        $(".gameContent").empty();
        var winMessage = $('<h2> Congratulations! ' + questions[currentQuestion].correctAnswer + ' is the correct answer.</h2><img id="correctAnswerImg" class="img-fluid img-thumbnail"><p><button class="btn btn-danger skipBtn">Skip</button></p>');
        $(".gameContent").append(winMessage);
        $("#correctAnswerImg").attr("src", questions[currentQuestion].correctAnswerImg);
        if (questionHistory.length < questionCount) {
            correctScreenTimer = setInterval(newQuestion, 1000 * 10);
            $(".skipBtn").on("click", function () { newQuestion() });
        } else {
            correctScreenTimer = setInterval(gameOverScreen, 1000 * 10);
            $(".skipBtn").on("click", function () { gameOverScreen() });
        }
    } //New window content for scenario where correct answer selected

    var lossScreenTimer;
    var lossCount = 0;

    function lossScreen() {
        lossCount++;
        clearInterval(countdownTimer);
        $(".gameContent").empty();
        var lossMessage = $('<h2> Sorry, wrong answer! You guessed ' + questions[currentQuestion][selectedAnswer] + '. The correct answer is ' + questions[currentQuestion].correctAnswer + '.</h2><img id="correctAnswerImg" class="img-fluid img-thumbnail"><p><button class="btn btn-danger skipBtn">Skip</button></p>');
        $(".gameContent").append(lossMessage);
        $("#correctAnswerImg").attr("src", questions[currentQuestion].incorrectAnswerImg);
        if (questionHistory.length < questionCount) {
            lossScreenTimer = setInterval(newQuestion, 1000 * 10);
            $(".skipBtn").on("click", function () { newQuestion() });
        } else {
            lossScreenTimer = setInterval(gameOverScreen, 1000 * 10);
            $(".skipBtn").on("click", function () { gameOverScreen() });
        }
    } //New window content for scenario where incorrect answer selected

    var timeoutTimer;
    var timeoutCount = 0;

    function timeoutScreen() {
        timeoutCount++;
        $(".gameContent").empty();
        var timeoutMessage = $('<h2>You\'ve run out of time! The correct answer is ' + questions[currentQuestion].correctAnswer + '. </h2> <img id="correctAnswerImg" class="img-fluid img-thumbnail"><p><button class="btn btn-danger skipBtn">Skip</button></p>');
        $(".gameContent").append(timeoutMessage);
        $("#correctAnswerImg").attr("src", questions[currentQuestion].timeoutAnswerImg);
        if (questionHistory.length < questionCount) {
            timeoutTimer = setInterval(newQuestion, 1000 * 10);
            $(".skipBtn").on("click", function () { newQuestion() });
        } else {
            timeoutTimer = setInterval(gameOverScreen, 1000 * 10);
            $(".skipBtn").on("click", function () { gameOverScreen() });
        }
    } //New window content for scenario where user runs out of time

    var gameOverTimer;
    var gameOverImg = "https://media.giphy.com/media/3osBL8wMQYQPYh0Jgs/giphy.gif";

    function gameOverScreen() {
        $(".gameContent").empty();
        clearInterval(countdownTimer);
        clearInterval(timeoutTimer);
        clearInterval(correctScreenTimer);
        clearInterval(lossScreenTimer);
        var gameOverMessage = $('<h2>Game Over</h2><p>Correct Guesses: ' + correctCount + '</p> <p>Wrong Guesses: ' + lossCount + '</p> <p>Out of Time: ' + timeoutCount + '</p><img id="gameOverImg" class="img-fluid img-thumbnail"><p><button class="btn btn-primary newGameBtn">Play Again</button>');
        $(".gameContent").append(gameOverMessage);
        $("#gameOverImg").attr("src", gameOverImg);
        questionHistory = [];
        $(".newGameBtn").on("click", function start() {
            newQuestion();
            timeoutCount = 0;
            correctCount = 0;
            lossCount = 0;
        })
    } //New window content for scenario where all questions completed, game is over

    $(".startBtn").on("click", function start() {
        newQuestion();
    }); //Starts the game upon clicking start button on opening page

})
