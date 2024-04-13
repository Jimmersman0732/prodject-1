function gradeQuiz() {
    const quizForm = document.getElementById('quizForm');
    const resultsDiv = document.getElementById('results');
    const answers = ['a', 'NBA', 'b', 'Los Angeles Lakers', 'b', '10 feet', 'b', 'LeBron James', 'c', 'Toronto Raptors']; // Add correct answers here

    let score = 0;

    for (let i = 1; i <= answers.length; i++) {
        const userAnswer = quizForm[`q${i}`].value.toLowerCase();
        if (userAnswer === answers[i - 1].toLowerCase()) {
            score++;
            quizForm[`q${i}`].classList.add('correct-answer');
        } else {
            quizForm[`q${i}`].classList.add('incorrect-answer');
        }
    }

    if (score > 7) {
        alert(`Good job! You scored ${score}/10.`);
    } else {
        alert(`Need some practice. You scored ${score}/10.`);
    }
}

function retryQuiz() {
    const quizForm = document.getElementById('quizForm');
    const resultsDiv = document.getElementById('results');

    for (let i = 1; i <= 10; i++) {
        const input = quizForm[`q${i}`];
        input.value = ''; // Clear text input values
        input.classList.remove('correct-answer', 'incorrect-answer'); // Remove classes
    }

    resultsDiv.textContent = ''; // Clear results
}
