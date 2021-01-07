var time = 60;
var timerInterval;
var buttonEl = document.querySelector("#start-btn");
var countdown = document.querySelector("#countdown");
var mainContent = document.querySelector("#main-content");
var quizContent = document.querySelector("#quiz-content");
var question = document.querySelector('#question');
var answers = document.querySelector('#answers')
let shuffledQuestions, currentQuestionIndex

buttonEl.addEventListener('click', startQuiz);


// start timer function 

function startQuiz(event) {
    timer()
    mainContent.style.display = "none"
    quizContent.style.display = "inherit"
    shuffledQuestions = questions.sort(() => Math.random() - .5);
    currentQuestionIndex = 0;
    setNextQuestion()


}

function timer() {
    clearInterval(timerInterval)
    timerInterval = setInterval(timerHandler, 1 * 1000)
}

function timerHandler() {
    time--; // (timer = timer - 1) === (timer -= 1)
    countdown.textContent = time

    if(time === 0){
        clearInterval(timerInterval)
    }
}

function setNextQuestion() {
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(questions) {
    question.innerText = questions.questions
}



// function timeEnd() {
//     window.clearInterval(timerInterval);
// };


// create questions 

const questions = [
    {
        question: 'Inside which HTML element do we put the JavaScrip?',
        answers: [
            {text: '<script>', correct: true},
            {text: '<scripting>', correct: false},
            {text: '<javascript>', correct: false},
            {text: '<js>', correct: false}
        ]
    },

    {
        question: 'How do you create a function in JavaScript?',
        answers: [
            {text: 'function = myFunction()', correct: false},
            {text: 'function myFunction()', correct: true},
            {text: 'function:myFunction()', correct: false},
            {text: 'funtion-myFunction()', correct: false}
        ]
    },

    {
        question: 'What is the correct way to write a JavaScript array?',
        answers: [
            {text:'var colors = ["red", "green", "blue"]', correct: true},
            {text:'var colors = 1 = ("red"), 2 = ("green"), 3 = ("blue")', correct: false},
            {text: 'var colors = "red", "green", "blue"', correct: false},
            {text: 'var colors = (1:"red", 2:"green", 3:"blue")', correct: false}
    ]
},
{
    question: 'Which event occurs when the user clicks on an HTML element?',
    answers: [
        {text:'onclick', correct:true},
        {text:'onchange', correct:false},
        {text:'onmouseclick', correct:false},
        {text:'onmouseover', correct:true}
    ]
}

]







// create function to subtract time on wrong answer
