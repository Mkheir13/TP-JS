function buildQuizz() {
    const output = [];
    myQuestions.forEach((currentQuestion, questionNumber) => {
        const answers = [];

        for (letter in currentQuestion.answers) {
            answers.push(
                `<label>
                    <input type="radio" name="question${questionNumber}" value="${letter}">
                    ${letter} :
                    ${currentQuestion.answers[letter]}
                </label>`
            );
        }
        output.push(
            `<div class="slide">
            <div class="question"> ${currentQuestion.question} </div>
            <div class="answers"> ${answers.join('')} </div>
            </div>`
        );
    }
    );
    quizz.innerHTML = output.join('');
}

function showResult() {
    const answerContainers = quizz.querySelectorAll('.answers');
    let numCorrect = 0;

    myQuestions.forEach( (currentQuestion, questionNumber) => {

        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;

        if(userAnswer === currentQuestion.correctAnswer){
            numCorrect++;
            answerContainers[questionNumber].style.color = 'green';
        }
        else{
            answerContainers[questionNumber].style.color = 'red';
        }
    });
    result.innerHTML = `${numCorrect} sur ${myQuestions.length} réponses correctes`;

    if (numCorrect == 5) {
        result.innerHTML;
    }
    else {
        result.innerHTML;
    }

}

function showSlide(n) {
    slides[currentSlide].classList.remove('active-slide');
    slides[n].classList.add('active-slide');
    currentSlide = n;
    if(currentSlide === 0){
        previousButton.style.display = 'none';
    }
    else{
        previousButton.style.display = 'inline-block';
    }
    if(currentSlide === slides.length-1){
        nextButton.style.display = 'none';
        submitbutton.style.display = 'inline-block';
    }
    else{
        nextButton.style.display = 'inline-block';
        submitbutton.style.display = 'none';
    }
}

function showNextSlide() {
    showSlide(currentSlide + 1);
}

function showPreviousSlide() {
    showSlide(currentSlide - 1);
}

const quizz = document.getElementById('quizz');
const result = document.getElementById('result');
const result2 = document.getElementById('result2');
const submitbutton = document.getElementById('submit');;

const myQuestions = [
    {
        question: 'Quel est le véritable nom de Scooby Doo ?',
        answers: {
            a: 'Scooby Scooby Doo',
            b: 'Scooboy Doo',
            c: 'Scoobert Doo',
            d: 'Scoody Doo'
        },
        correctAnswer: 'c'
    },
    {
        question: 'Quel est le plat préféré de Scooby Doo ?',
        answers: {
            a: 'Pizza',
            b: 'Pâtes',
            c: 'Pâtes frites',
            d: 'Scooby-Snack'
        },
        correctAnswer: 'd'
    },
    {
        question: 'Comment appelle-t-on les frères et soeurs de Scooby Doo ?',
        answers: {
            a: 'Skippy-Doo et Dooby-Doo',
            b: 'Skippy-Doo et Doo-Doo',
            c: 'Skibby-Doo et Dooby-Doo',
            d: 'Fox et Roocky'
        },
        correctAnswer: 'a'
    },
    {
        question: 'Quelle age a Scooby Doo ?',
        answers: {
            a: '10 ans',
            b: '13 ans',
            c: '7 ans',
            d: '15 ans'
        },
        correctAnswer: 'c'
    },
    {
        question: 'Comment s\'appelle le meilleur ami de Scooby Doo ?',
        answers: {
            a: 'Scrappy',
            b: 'Shaggy',
            c: 'Velma',
            d: 'Fred'
        },
        correctAnswer: 'b'
    },
];



buildQuizz();

const previousButton = document.getElementById("previous");
const nextButton = document.getElementById("next");
const slides = document.querySelectorAll(".slide");
let currentSlide = 0

showSlide(currentSlide);

submitbutton.addEventListener('click', showResult);
previousButton.addEventListener("click", showPreviousSlide);
nextButton.addEventListener("click", showNextSlide);

