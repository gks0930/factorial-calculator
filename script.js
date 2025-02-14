const darkModeButton = document.getElementById('darkModeButton');
const body = document.body;

darkModeButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    darkModeButton.textContent = body.classList.contains('dark-mode') ? '☀️' : '🌙';
});

document.querySelectorAll('.faq-question').forEach((question) => {
    question.addEventListener('click', () => {
    const answer = question.nextElementSibling;
    answer.classList.toggle('active');
    });
})  

function calculateFactorial() {
    const input = document.getElementById('numberInput').value;
    const resultDiv = document.getElementById('result');

    if (!input || isNaN(input) || input < 0 || !Number.isInteger(Number(input))) {
        resultDiv.textContent = 'Please enter a valid positive integer.';
        return;
    }

    const number = parseInt(input);

    const method = document.querySelector('input[name="method"]:checked').value;

    let factorialResult;
    if (method === 'iterative') {
        factorialResult = iterativeFactorial(number);
    } else if (method === 'recursive') {
        factorialResult = recursiveFactorial(number);
    }

    resultDiv.innerHTML = `
        <strong>${method.charAt(0).toUpperCase() + method.slice(1)} Method:</strong> ${factorialResult}
  `;
}

function iterativeFactorial(n) {
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

function recursiveFactorial(n) {
    if (n === 0 || n === 1) return 1;
    return n * recursiveFactorial(n - 1);
}