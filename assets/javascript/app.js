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

var questionPicker = Math.round(Math.random(Object.keys(questions).length)); //generates number by which property is picked from question object
var currentQuestion = Object.keys(questions)[questionPicker];

console.log(currentQuestion);
console.log(currentQuestion.correctAnswer);

var questionHistory; //Array to store history of questions already asked



function newGame() {

} //sets initial question and answers at game start

function pageContent() {
    $("#question").text(currentQuestion.question);
    $("#answerOption1").text(currentQuestion.correctAnswer);
    $("#answerOption2").text(currentQuestion.incorrectAnswer1);
    $("#answerOption3").text(currentQuestion.incorrectAnswer2);
    $("#answerOption4").text(currentQuestion.incorrectAnswer3);

    /*<h3 id="question">Question...</h3>
    <h2 id="answerOption1">Answer Option 1</h2>
    <h2 id="answerOption2">Answer Option 2</h2>
    <h2 id="answerOption3">Answer Option 3</h2>
    <h2 id="answerOption4">Answer Option 4</h2>*/

}//executes eachtime page contnet must be initialised or changed

window.onload = pageContent();