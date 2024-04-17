function gradeQuiz() {
    const quizForm = document.getElementById('quizForm');
    const resultsDiv = document.getElementById('results');
    const answers = ['James Naismith', 'NBA', 'Kobe Bryant', 'Los Angeles Lakers', 'Wilt Chamberlain', '10 feet', 'Giannis Antetokounmpo', 'Kareem Abdul-Jabbar', 'Toronto Raptors', 'Michael Jordan'];

    let score = 0;

    for (let i = 1; i <= answers.length; i++) {
        const userAnswer = quizForm[`q${i}`].value.trim().toLowerCase();
        if (userAnswer === answers[i - 1].toLowerCase()) {
            score++;
            quizForm[`q${i}`].classList.add('correct-answer');
        } else {
            quizForm[`q${i}`].classList.add('incorrect-answer');
        }
    }

    if (score > 7) {
        resultsDiv.textContent = `Good job! You scored ${score}/10.`;
    } else {
        resultsDiv.textContent = `Need some practice. You scored ${score}/10.`;
    }
}

function retryQuiz() {
    const quizForm = document.getElementById('quizForm');
    const resultsDiv = document.getElementById('results');

    for (let i = 1; i <= 10; i++) {
        const input = quizForm[`q${i}`];
        input.value = ''; // Clear text input values
        input.classList.remove('correct-answer', 'incorrect-answer');
    }

    resultsDiv.textContent = '';
}

function showAnswer(questionId) {
    const answerSpan = document.getElementById(`answer_${questionId}`);
    const answerButton = document.getElementById(`show_answer_${questionId}`);
    if (answerSpan.style.display === 'none' || !answerSpan.style.display) {
        answerSpan.textContent = getCorrectAnswer(questionId);
        answerSpan.style.display = 'inline';
        answerButton.textContent = 'Hide Answer';
    } else {
        answerSpan.textContent = '';
        answerSpan.style.display = 'none';
        answerButton.textContent = 'Show Answer';
    }
}

function showAllAnswers() {
    for (let i = 1; i <= 10; i++) {
        const answerSpan = document.getElementById(`answer_q${i}`);
        const answerButton = document.getElementById(`show_answer_q${i}`);
        answerSpan.textContent = getCorrectAnswer(`q${i}`);
        answerSpan.style.display = 'inline';
        answerButton.textContent = 'Hide Answer';
    }
}

function getCorrectAnswer(questionId) {
    const answers = ['James Naismith', 'NBA', 'Kobe Bryant', 'Los Angeles Lakers', 'Wilt Chamberlain', '10 feet', 'Giannis Antetokounmpo', 'Kareem Abdul-Jabbar', 'Toronto Raptors', 'Michael Jordan'];
    return answers[parseInt(questionId.slice(1)) - 1];
}
