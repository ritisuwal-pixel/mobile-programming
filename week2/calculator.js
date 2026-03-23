// Function to perform calculation
function calculate(operator) {
    
    // Convert input strings to numbers
    let num1 = Number(document.getElementById('num1').value);
    let num2 = Number(document.getElementById('num2').value);
    let result;

    // Check if inputs are valid
    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById('result').innerText = "Please enter valid numbers!";
        return;
    }

    
    if (operator === '+') {
        result = num1 + num2;
    } else if (operator === '-') {
        result = num1 - num2;
    } else if (operator === '*') {
        result = num1 * num2;
    } else if (operator === '/') {
        if (num2 === 0) {
            result = "Cannot divide by zero!";
        } else {
            result = num1 / num2;
        }
    }

   
    document.getElementById('result').innerText = "Result: " + result;
}