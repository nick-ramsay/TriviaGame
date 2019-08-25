$(document).ready(function () {
    questions = {
        question1: {
            question: "In what year did World War II end?",
            correctAnswer: 1945,
            incorrectAnswer1: 1963,
            incorrectAnswer2: 1919,
            incorrectAnswer3: 1933
        },

        question2: {
            question: "Who is Australia's current Prime Minister?",
            correctAnswer: "Scott Morrison",
            incorrectAnswer1: "Tony Abbott",
            incorrectAnswer2: "Kevin Rudd",
            incorrectAnswer3: "Julia Gilliard"
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
        for (i = 0; (questionHistory.length === 0 && i === 0) || (questionHistory.length > 0 && questionPicker.indexOf(questionHistory) === -1); i++) {
            questionPicker = Math.round(Math.random(questionCount));
        } //If history empty, iterate once & pick one. Else, continue picking until you find question NOT in history (indexOf = -1)
        currentQuestion = Object.keys(questions)[questionPicker];
        questionHistory.push(currentQuestion);
    }

    function pageContent() {
        $("#question").text(questions[currentQuestion].question);
        $("#answerOption1").text(questions[currentQuestion].correctAnswer);
        $("#answerOption2").text(questions[currentQuestion].incorrectAnswer1);
        $("#answerOption3").text(questions[currentQuestion].incorrectAnswer2);
        $("#answerOption4").text(questions[currentQuestion].incorrectAnswer3);
    }//executes eachtime page contnet must be initialised or changed

    window.onload = newQuestion();
    window.onload = pageContent();

})