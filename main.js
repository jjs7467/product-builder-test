const generateBtn = document.getElementById('generate-btn');
const numbersContainer = document.getElementById('numbers-container');
const themeToggle = document.getElementById('theme-toggle');

themeToggle.addEventListener('change', () => {
    document.body.classList.toggle('dark-mode');
});

const ballColors = [
    '#f44336', '#e91e63', '#9c27b0', '#673ab7', '#3f51b5',
    '#2196f3', '#03a9f4', '#00bcd4', '#009688', '#4caf50',
    '#8bc34a', '#cddc39', '#ffeb3b', '#ffc107', '#ff9800',
    '#ff5722', '#795548', '#9e9e9e', '#607d8b'
];

generateBtn.addEventListener('click', () => {
    numbersContainer.innerHTML = '';
    const numbers = new Set();
    while (numbers.size < 6) {
        const randomNumber = Math.floor(Math.random() * 45) + 1;
        numbers.add(randomNumber);
    }

    const sortedNumbers = Array.from(numbers).sort((a, b) => a - b);

    sortedNumbers.forEach(number => {
        const ball = document.createElement('div');
        ball.classList.add('number-ball');
        ball.textContent = number;
        
        const colorIndex = Math.floor(Math.random() * ballColors.length);
        ball.style.backgroundColor = ballColors[colorIndex];
        
        numbersContainer.appendChild(ball);
    });
});
