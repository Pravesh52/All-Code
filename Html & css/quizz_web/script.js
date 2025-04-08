// script.js
const questionEl = document.getElementById('question');
const answerInput = document.getElementById('answer');
const submitButton = document.getElementById('submit');
const feedbackEl = document.getElementById('feedback');
const nextButton = document.getElementById('next-question');

let correctAnswer;

function generateQuestion() {
  // Random numbers and operator
  const num1 = Math.floor(Math.random() * 10) + 2;
  const num2 = Math.floor(Math.random() * 10) + 2;
  const operations = ['+', '-', '*', '/'];
  const operation = operations[Math.floor(Math.random() * operations.length)];
  
  // Calculate correct answer
  switch (operation) {
    case '+':
      correctAnswer = num1 + num2;
      break;
    case '-':
      correctAnswer = num1 - num2;
      break;
    case '*':
      correctAnswer = num1 * num2;
      break;
    case '/':
      correctAnswer = Math.floor(num1 / num2); // Division rounded to the nearest integer
      break;
  }
  
  // Display question
  questionEl.textContent = `What is ${num1} ${operation} ${num2} = ?`;
}

function checkAnswer() {
  const userAnswer = Number(answerInput.value);
  
  if (userAnswer === correctAnswer) {
    feedbackEl.textContent = 'Correct!';
    feedbackEl.style.color = 'green';
    nextButton.style.display = 'inline-block';
  } else {
    feedbackEl.textContent = 'Incorrect, try again.';
    feedbackEl.style.color = 'red';
  }
}

// Event listeners
submitButton.addEventListener('click', checkAnswer);

nextButton.addEventListener('click', () => {
  feedbackEl.textContent = '';
  answerInput.value = '';
  nextButton.style.display = 'none';
  generateQuestion();
});

// Start by generating the first question
generateQuestion();
