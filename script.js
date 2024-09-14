document.addEventListener('deviceready', function () {
    const operationDiv = document.getElementById('operation');
    const answerInput = document.getElementById('answer');
    const submitButton = document.getElementById('submit');

    let correctAnswer = 0;

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function GerarConta() {
        const operators = ['+', '-', '*', '/'];
        const num1 = getRandomInt(1, 10);
        const num2 = getRandomInt(1, 10);
        const operator = operators[getRandomInt(0, operators.length - 1)];
        
        let result;
        switch (operator) {
            case '+':
                result = num1 + num2;
                break;
            case '-':
                result = num1 - num2;
                break;
            case '*':
                result = num1 * num2;
                break;
            case '/':
                result = num1 / num2;
                result = parseFloat(result.toFixed(2)); 
                break;
        }

        correctAnswer = result;
        operationDiv.textContent = `${num1} ${operator} ${num2} =`;
    }

    function VerificarAcerto() {
        const userAnswer = parseFloat(answerInput.value);

        if (userAnswer === correctAnswer) {
            navigator.vibrate([1000, 1000, 1000]); 
            answerInput.value = '';
            GerarConta(); 
        } else {
            navigator.vibrate(1000); 
        }
    }

    submitButton.addEventListener('click', VerificarAcerto);

    GerarConta();
});
