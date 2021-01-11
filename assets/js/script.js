var time = 60;
var timerInterval;
var buttonEl = document.querySelector('#start-btn');
var countdown = document.querySelector('#countdown');
var mainContent = document.querySelector('#main-content');
var quizContent = document.querySelector('#quiz-content');
var gameOver = document.querySelector('#score')
var quizQuestion = document.querySelector('#question');
var wrongAnswer = document.querySelector('#wrong-answer');
var correctAnswer = document.querySelector('#correct-answer');
var questionCounter = 0;
var correct = 0;
var submit = document.querySelector('#submit-score');
var initials = document.querySelector('#initials');

var $bnt0 = document.querySelector('#btn0');
var $bnt1 = document.querySelector('#btn1');
var $bnt2 = document.querySelector('#btn2');
var $bnt3 = document.querySelector('#btn3');

// event listeners 

buttonEl.addEventListener('click', startQuiz);
$bnt0.addEventListener('click', checkForCorrect);
$bnt1.addEventListener('click', checkForCorrect);
$bnt2.addEventListener('click', checkForCorrect);
$bnt3.addEventListener('click', checkForCorrect);




// array of questions++

var question = [
    {
        q: 'Inside which HTML element do we put the JavaScrip?',
        a: [
            {text: '<script>', correct: true},
            {text: '<scripting>', correct: false},
            {text: '<javascript>', correct: false},
            {text: '<js>', correct: false},
        ]
    },

    {
        q: 'How do you create a function in JavaScript?',
        a: [
            {text: 'function = myFunction()', correct: false},
            {text: 'function myFunction()', correct: true},
            {text: 'function:myFunction()', correct: false},
            {text: 'funtion-myFunction()', correct: false},
        ]
    },

    {
        q: 'What is the correct way to write a JavaScript array?',
        a: [
            {text:'var colors = ["red", "green", "blue"]', correct: true},
            {text:'var colors = 1 = ("red"), 2 = ("green"), 3 = ("blue")', correct: false},
            {text: 'var colors = "red", "green", "blue"', correct: false},
            {text: 'var colors = (1:"red", 2:"green", 3:"blue")', correct: false},
    ]
},
{
    q: 'Which event occurs when the user clicks on an HTML element?',
    a: [
        {text:'onclick', correct:true},
        {text:'onchange', correct:false},
        {text:'onmouseclick', correct:false},
        {text:'onmouseover', correct:false},
    ]
}

]



// start timer function 

function startQuiz(event) {
    timer()
    mainContent.style.display = "none"
    quizContent.style.display = "inherit"
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
        endGame()
    }
}


// Rendering the question and answer on the page

function setNextQuestion(){
    if (questionCounter < question.length) {
        quizQuestion.textContent = question[questionCounter].q;
        $bnt0.textContent = question[questionCounter].a[0].text;
        $bnt0.dataset.correct = question[questionCounter].a[0].correct;
        $bnt1.textContent = question[questionCounter].a[1].text;
        $bnt1.dataset.correct = question[questionCounter].a[1].correct;
        $bnt2.textContent = question[questionCounter].a[2].text;
        $bnt2.dataset.correct = question[questionCounter].a[2].correct;
        $bnt3.textContent = question[questionCounter].a[3].text;
        $bnt3.dataset.correct = question[questionCounter].a[3].correct;
        
     
     questionCounter++;

    } else {
        //game over no new questions
        endGame();
    }


}

function checkForCorrect(event) {
    console.log(event.target.dataset.correct)
    if (event.target.dataset.correct) {
        //increment correct
        correctAnswer.style.display = "inherit"

    } else {
        //remove some time
        wrongAnswer.style.display = "inherit"
        time -= 10;
        
        
     }
     setNextQuestion()
    
}



// create form to enter name

function endGame () {
    quizContent.style.display = "none";
    gameOver.style.display = "inherit";
   
}

// store scores
submit.addEventListener('click', function(event) {
    event.preventDefault();
    localStorage.setItem('initials', initials);
    localStorage.setItem('time',time);
});











