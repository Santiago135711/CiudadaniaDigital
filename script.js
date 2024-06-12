const quizData = [
    {
        question: "¿Es seguro compartir tu contraseña con amigos?",
        options: [ "Sí", "No" ],
        correct: 1
    },
    {
        question: "¿Deberías verificar la autenticidad de una fuente antes de compartir una noticia?",
        options: [ "Sí", "No" ],
        correct: 0
    },
    {
        question: "¿Es recomendable usar la misma contraseña para todas tus cuentas?",
        options: [ "Sí", "No" ],
        correct: 1
    },
    {
        question: "¿Es seguro proporcionar información personal en sitios web desconocidos?",
        options: [ "Sí", "No" ],
        correct: 1
    },
    {
        question: "¿Deberías actualizar regularmente tu software y aplicaciones?",
        options: [ "Sí", "No" ],
        correct: 0
    }
];

let currentQuestionIndex = 0;

function loadQuestion() {
    const questionElement = document.getElementById('question');
    const buttons = document.querySelectorAll('#quiz button');
    
    questionElement.textContent = quizData[currentQuestionIndex].question;
    buttons[0].textContent = quizData[currentQuestionIndex].options[0];
    buttons[1].textContent = quizData[currentQuestionIndex].options[1];
}

function checkAnswer(isFirstOption) {
    const resultElement = document.getElementById('result');
    const correctAnswer = quizData[currentQuestionIndex].correct;

    if ((isFirstOption && correctAnswer === 0) || (!isFirstOption && correctAnswer === 1)) {
        resultElement.textContent = "¡Correcto!";
        resultElement.style.color = 'green';
    } else {
        resultElement.textContent = "Incorrecto. Intenta de nuevo.";
        resultElement.style.color = 'red';
    }
    
    currentQuestionIndex++;
    
    if (currentQuestionIndex < quizData.length) {
        setTimeout(() => {
            resultElement.textContent = "";
            loadQuestion();
        }, 2000);
    } else {
        setTimeout(() => {
            resultElement.textContent = "¡Has completado el quiz!";
        }, 2000);
    }
}

document.addEventListener('DOMContentLoaded', loadQuestion);