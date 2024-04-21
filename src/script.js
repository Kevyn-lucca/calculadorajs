const Display = document.querySelector("#display")
const btn = document.querySelectorAll("button")
let textArray = []

btn.forEach(btn => {
    btn.addEventListener('click', function(){
        let textCalc = this.getAttribute('value')
        if( textCalc !== 'result'){
            textArray.push(textCalc)
            const textString = textArray.join("")
            Display.textContent = textString;
        }        

        else{
            const result = resultValues();
            Display.textContent = roundResult(result);
            textArray = [result.toString()]; 
        }        
})});

function roundResult(number) {
    return Math.round(number * 1000) / 1000
}

function resultValues() {
    let result = 0;
    let currentNumber = '';
    let currentOperation = '+';

    textArray.forEach(char => {
        if (!isNaN(char) || char === '.') {
            currentNumber += char;
        } else if (char === '+' || char === '-' || char === '*' || char === '/') {
            if (currentOperation === '+') {
                result += parseFloat(currentNumber);
            } else if (currentOperation === '-') {
                result -= parseFloat(currentNumber);
            } else if (currentOperation === '*') {
                result *= parseFloat(currentNumber);
            } else if (currentOperation === '/') {
                result /= parseFloat(currentNumber);
            }
            currentNumber = '';
            currentOperation = char;
        }
    });

    if (currentOperation === '+') {
        result += parseFloat(currentNumber);
    } else if (currentOperation === '-') {
        result -= parseFloat(currentNumber);
    } else if (currentOperation === '*') {
        result *= parseFloat(currentNumber);
    } else if (currentOperation === '/') {
        result /= parseFloat(currentNumber);
    }

    return result;
}
