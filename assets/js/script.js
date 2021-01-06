// create function to start quiz timer that starts at 60 sec
var time = 60;
var timerInterval = window.setInterval("timer()", 1000);

var buttonEl = document.querySelector("#start-btn");



// Start timer function

function timer(ButtonEl) {
    document.getElementById("countdown").innerHTML = time-=1;

    if (time <= 0) {
        timeEnd();
    }
};

function timeEnd() {
    window.clearInterval(timerInterval);
};
  


// start Button timer
buttonEl.addEventListener("click", timer);














// create questions 

// const questions = [
//     {
//         question: 'Inside which HTML element do we put the JavaScrip?'
//         answers: [
//             {text: '<script>', correct: true},
//             {text: '<scripting>', correct: false},
//             {text: '<javascript>', correct: false},
//             {text: '<js>', correct: false}
//         ]
//     },

//     {
//         question: 'How do you create a function in JavaScript?'
//         answers: [
//             {text: 'function = myFunction()', correct: false},
//             {text: 'function myFunction()', correct: true},
//             {text: 'function:myFunction()', correct: false},
//             {text: 'funtion-myFunction()', correct: false}
//         ]
//     },

//     {
//         question: 'What is the correct way to write a JavaScript array?'
//         answers: [
//             {text:'var colors = ["red", "green", "blue"]', correct: true},
//             {text:'var colors = 1 = ("red"), 2 = ("green"), 3 = ("blue")', correct: false},
//             {text: 'var colors = "red", "green", "blue"', correct: false},
//             {text: 'var colors = (1:"red", 2:"green", 3:"blue")', correct: false}
//     ]
// },
// {
//     question: 'Which event occurs when the user clicks on an HTML element?'
//     answers: [
//         {text:'onclick', correct:true},
//         {text:'onchange', correct:false},
//         {text:'onmouseclick', correct:false},
//         {text:'onmouseover', correct:true}
//     ]
// }

// ]


 




// create function to subtract time on wrong answer
