let currentIndex = 0;
const fibonacciSequence = [0, 1];

function generateFibonacci(n) {
    for (let i = 2; i < n; i++) {
        fibonacciSequence[i] = fibonacciSequence[i - 1] + fibonacciSequence[i - 2];
    }
}

function displayFlashcard() {
    document.getElementById('sequence-number').innerText = fibonacciSequence[currentIndex];
}

function checkAnswer() {
    const userInput = parseInt(document.getElementById('user-input').value);
    const correctAnswer = fibonacciSequence[currentIndex + 1];
    const feedback = document.getElementById('feedback');

    if (userInput === correctAnswer) {
        feedback.innerText = "Correct!";
        feedback.style.color = "green";
    } else {
        feedback.innerText = "Try again!";
        feedback.style.color = "red";
    }
}

function nextFlashcard() {
    currentIndex++;
    document.getElementById('user-input').value = "";
    document.getElementById('feedback').innerText = "";
    displayFlashcard();
}

document.addEventListener('DOMContentLoaded', () => {
    generateFibonacci(20);
    displayFlashcard();
});
