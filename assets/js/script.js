// create function to start quiz timer that starts at sec
var time = 30;
var buttonEl = document.querySelector("#start-btn");


function timer() {
  
    time = time - 1;
    if (time > time) {
        countdown.innerHTML = 30;
    }

    if (time < 1) {
        window.clearInterval(update);
    }

    buttonEl.addEventListener('click', funtion() {
        timer()
    }) 
    
    };
    

update = setInterval("timer()", 1000);
















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
