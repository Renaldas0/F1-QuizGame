// sets the questions and answers array into a variable:

let questions = [
    {
        question:'1. Which team has won the most constructors championships?',
        answers: {
            A: 'Ferrari',
            B: 'McLaren',
            C: 'Williams',
            D: 'Mercedes'
        },
        correctAnswer: 'Ferrari'
    },
    {
        question:'2. Which driver has won the most consequtive drivers championships?',
        answers: {
            A: 'Lewis Hamilton',
            B: 'Sebastian Vettel',
            C: 'Ayrton Senna',
            D: 'Michael Schumacher'
        },
        correctAnswer: 'Michael Schumacher'
    },
    {
        question:'3. Which driver has won the most races in one season?',
        answers: {
            A: 'Michael Schumacher',
            B: 'Jenson Button',
            C: 'Kimi Raikkonen',
            D: 'Ayrton Senna'
        },
        correctAnswer: 'Michael Schumacher'
    },
    {
        question:'4. What was the highest number of points scored by a driver in one season?',
        answers: {
            A: '397',
            B: '405',
            C: '296',
            D: '360'
        },
        correctAnswer: '397'
    },
    {
        question:'5. Which team has been part of F1 the longest?',
        answers: {
            A: 'Williams',
            B: 'McLaren',
            C: 'Ferrari',
            D: 'RedBull'
        },
        correctAnswer: 'Ferrari' 
    },
    {
        question:'6. Which team has scored the most points in a season (current scoring)?',
        answers: {
            A: 'RedBull',
            B: 'Ferrari',
            C: 'Mercedes',
            D: 'Alpha Tauri'
        },
        correctAnswer: 'Mercedes'
    },
    {
        question:'7. How many points are awarded to the race winner of each Grand Prix?',
        answers: {
            A: '27',
            B: '25',
            C: '24',
            D: '26'
        },
        correctAnswer: '25'
    },
    {
        question:'8. In 2016, who became F1 World Champion and then announced his retirement from the sport five days later?',
        answers: {
            A: 'Kimi Raikkonen',
            B: 'Nico Rosberg',
            C: 'Jenson Button',
            D: 'Fernando Alonso'
        },
        correctAnswer: 'Nico Rosberg'
    },
    {
        question:'9. Who was the first ever British Formula One World Champion?',
        answers: {
            A: 'Nigel Manson',
            B: 'Jim Clark',
            C: 'Lewis Hamilton',
            D: 'Mike Hawthorne'
        },
        correctAnswer: 'Mike Hawthorne'
    },
    {
        question:'10. Which car team were Constructors Champions in 2017?',
        answers: {
            A: 'Ferrari',
            B: 'RedBull',
            C: 'Renault',
            D: 'Mercedes'
        },
        correctAnswer: 'Mercedes'
    }
];

// assigns all the necessary variables:

let quizContainer = document.getElementById('quiz-container');
let questionH2 = document.getElementById('question-h2');
let answerButton = document.getElementsByClassName('answer-btn');
let nextButton = document.getElementById('next');
let restartButton = document.getElementById('restart');
let scoreCount = document.getElementById('scores');
let ques = 0;
let ans = 0;
let correct = 0;
let totalQuestions = 10;
let currentQuestion = 0;

//score tracking
scoreCount.innerHTML = 'Score: ' + correct + '/' + totalQuestions;

//Checks if the answer is right or wrong

function showAnswer(event) 
    // If the answer is correct
    {
    if (this.innerHTML === questions[ques].correctAnswer && currentQuestion == (totalQuestions - 1)){
        correct++;
        currentQuestion++;
        quizContainer.style.backgroundColor = 'green';
        questionH2.innerHTML = 'You got it right!';
        
    }
    // if the answer is incorrect
    else if (this.innerHTML != questions[ques].correctAnswer && currentQuestion == (totalQuestions - 1)){
        currentQuestion++;
        quizContainer.style.backgroundColor = 'red';
        questionH2.innerHTML = 'You got this one wrong. ' + ' The correct answer is: ' + '<strong>' + questions[ques].correctAnswer + '</strong>';
    }
    else if (this.innerHTML == questions[ques].correctAnswer && currentQuestion == ques){
        quizContainer.style.backgroundColor = 'green';
        questionH2.innerHTML = 'You got it right!';
        correct++;
        currentQuestion++;
    }
    else if (this.innerHTML != questions[ques].correctAnswer && currentQuestion == ques){
        quizContainer.style.backgroundColor = 'red';
        questionH2.innerHTML = 'You got this one wrong. ' + 'The correct answer is: ' + '<strong>' + questions[ques].correctAnswer + '</strong>';
        currentQuestion++;
    }
    //changes the score after each correct question
    scoreCount.innerHTML = 'Score: ' + correct + '/' + totalQuestions;
}
    
let i;
for (i = 0; i < answerButton.length; i++){
    answerButton[i].addEventListener("click", showAnswer);
}

    questionH2.innerHTML = questions[ques].question;
    answerButton[0].innerHTML = questions[ans].answers.A;
    answerButton[1].innerHTML = questions[ans].answers.B;
    answerButton[2].innerHTML = questions[ans].answers.C;
    answerButton[3].innerHTML = questions[ans].answers.D;

    nextButton.addEventListener('click', nextQuestion);

    // Function targetting the next question.

    function nextQuestion() {
        if (currentQuestion == totalQuestions) {
            alert('Your final score was ' +  correct + '/' + totalQuestions  +'. ' + ' Press restart to play again');
    
        }
        else if (currentQuestion > ques) {
            ques++;
            ans++;
            questionH2.innerHTML = questions[ques].question;
            answerButton[0].innerHTML = questions[ans].answers.A;
            answerButton[1].innerHTML = questions[ans].answers.B;
            answerButton[2].innerHTML = questions[ans].answers.C;
            answerButton[3].innerHTML = questions[ans].answers.D;
            quizContainer.style.backgroundColor = 'rgb(180, 180, 180,0.7)';
        }
        else {
            alert('Select an answer to continue');
        }
    }
    // function to restart the quiz
    restartButton.addEventListener('click', restartQuiz);

    function restartQuiz() {
    location.reload();
}