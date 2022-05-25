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
let answerButtons = document.getElementById('answer-buttons');
let nextButton = document.getElementById('next-question');
let restartButton = document.getElementById('restart');
let scoreCount = document.getElementById('scores');
let q = 0;
let a = 0;
let correct = 0;
let totalQuestions = 10;
let currentQuestion = 0;

//score tracking
scoreCount.innerHTML = 'scores: ' + correct ;

function showAnswer(event) {
    if (this.innerHTML === questions[q].correctAnswer && currentQuestion == (totalQuestions - 1)){
        correct++;
        currentQuestion++;
        quizContainer.style.backgroundColor = 'green';
        questionH2.innerHTML = 'You got it right!';
        scoreCount++;
    }
    else if (this.innerHTML != questions[q].correctAnswer && currentQuestion == (totalQuestions - 1)){
        currentQuestion++;
        quizContainer.style.backgroundColor = 'red';
        questionH2.innerHTML = 'You got this one wrong' + 'The correct answer is: ' + '<strong>' + questions[q].correctAnswer + '</strong>';
    }
    else if (this.innerHTML == questions[q].correctAnswer && currentQuestion == q){
        quizContainer.style.backgroundColor = 'green';
        questionH2.innerHTML = 'You got it right!';
        correct++;
        scoreCount++;
    }
    else if (this.innerHTML != questions[q].correctAnswer && currentQuestion == q){
        quizContainer.style.backgroundColor = 'red';
        questionH2.innerHTML = 'You got this one wrong' + 'The correct answer is: ' + '<strong>' + questions[q].correctAnswer + '</strong>';
        currentQuestion++;
    }
    //changes the score after each correct question
    scoreCount.innerHTML = 'scores: ' + correct ;
}
    
let i;
for (i = 0; i < answerButtons.length; i++){
answerButtons[i].addEventListener('click', revealAnswer);
        
}

    questionH2.innerHTML = questions[q].question;
    answerButtons[0].innerHTML = questions[a].answers.A;
    answerButtons[1].innerHTML = questions[a].answers.B;
    answerButtons[2].innerHTML = questions[a].answers.C;
    answerButtons[3].innerHTML = questions[a].answers.D;

    nextButton.addEventListener('click', nextQuestion);

    function nextQuestion() {
        if (currentQuestion == totalQuestions) {
            alert('Press restart to play again');
        }
        else if (currentQuestion > q) {
            q++;
            a++;
            questionH2.innerHTML = questions[q].question;
            answerButton[0].innerHTML = questions[a].answers.A;
            answerButton[1].innerHTML = questions[a].answers.B;
            answerButton[2].innerHTML = questions[a].answers.C;
            answerButton[3].innerHTML = questions[a].answers.D;
            quizContainer.style.backgroundColor = 'white';
        }
        else {
            alert('select an answer to continue');
        }
    }

    restartButton.addEventListener('click', restartQuiz);

    function restartQuiz() {
    location.reload();
}