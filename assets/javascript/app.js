$(document).ready(function () {
    questions = {
        question1: {
            question: "In what year did World War II end?",
            correctAnswer: 1945,
            answerOption1: 1963,
            answerOption2: 1919,
            answerOption3: 1945,
            answerOption4: 1933
        },

        question2: {
            question: "Who is Australia's current Prime Minister?",
            correctAnswer: "Scott Morrison",
            answerOption1: "Tony Abbott",
            answerOption2: "Scott Morrison",
            answerOption3: "Kevin Rudd",
            answerOption4: "Julia Gilliard"
        }
    }

    var questionCount = Object.keys(questions).length; //total number of questions
    var questionPicker; //= Math.round(Math.random(Object.keys(questions).length)); //generates number by which property is picked from question object
    var currentQuestion;

    var questionHistory = []; //Array to store history of questions already asked

    function newQuestion() {
        if (questionHistory.length === questionCount) {
            questionHistory = [];
        } //If all questions have been used, clear history and restart selection process
        for (i = 0; (questionHistory.length === 0 && i === 0) || (questionHistory.length > 0 && questionHistory.indexOf(questionPicker) !== -1); i++) {
            questionPicker = Math.round(Math.random(questionCount));
        } //If history empty, iterate once & pick one. Else, continue picking until you find question NOT in history (indexOf = -1)
        currentQuestion = Object.keys(questions)[questionPicker];
        questionHistory.push(currentQuestion);
        pageContent();
    }

    function pageContent() {
        $("#question").text(questions[currentQuestion].question);
        $("#answerOption1").text(questions[currentQuestion].answerOption1);
        $("#answerOption2").text(questions[currentQuestion].answerOption2);
        $("#answerOption3").text(questions[currentQuestion].answerOption3);
        $("#answerOption4").text(questions[currentQuestion].answerOption4);
    }//executes eachtime page contnet must be initialised or changed

    $(document).on("click", '.question', function (event) {
        var selectedAnswer = this.id;
        if (questions[currentQuestion][selectedAnswer] === questions[currentQuestion].correctAnswer) {
            alert("Right!");
            newQuestion();
        } else {
            alert("Wrong!");
            newQuestion();
        }
    })

    window.onload = newQuestion();
    window.onload = pageContent();

})