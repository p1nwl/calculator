document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('calc');
    let text = input.value;
    let summary = 0;
    let firstNumber = null;
    let secondNumber = null;
    let switcher = 0;

    const numbers = document.querySelectorAll('.number')

    const deleteSign = document.querySelector('.delete');
    const plus = document.querySelector('.plusSign');
    const minus = document.querySelector('.minusSign');
    const divider = document.querySelector('.divider');
    const multiplier = document.querySelector('.multiplier');

    const reset = document.querySelector('.reset');
    const equalSign = document.querySelector('.equalSign');

    input.addEventListener('input', (event) => {
        text = event.target.value;
        secondNumber = text;
    })

    for (const number of numbers) {
        number.addEventListener('click', (event) => {
            text += event.target.innerText;
            input.value = text;
            secondNumber = text;
        })
    };

    plus.addEventListener('click', (event) => {

        switcher = 1;
        firstNumber = text;
        summary += +firstNumber;
        input.value = summary;
        
        text = '';
        firstNumber = null;
    })
    minus.addEventListener('click', (event) => {

        if (secondNumber === null) {
            input.value = -0;
        }
        switcher = 2;
        if (summary) {
            firstNumber = text;
            summary -= +firstNumber;
            input.value = summary;

            text = '';
            firstNumber = null;
            return;
        }

        firstNumber = text;
        summary += +firstNumber;
        input.value = summary;
        
        text = '';
        firstNumber = null;
    })
    divider.addEventListener('click', (event) => {
        
        switcher = 3;
        if (summary) {
            summary /= +secondNumber;
            input.value = summary;

            text = '';
            firstNumber = null;
            return;
        }

        firstNumber = text;
        summary += +firstNumber;
        input.value = summary;
        
        text = '';
        firstNumber = null;
    })
    multiplier.addEventListener('click', (event) => {

        switcher = 4;
        if (summary) {
            summary *= +secondNumber;
            input.value = summary;

            text = '';
            firstNumber = null;
            return;
        }

        firstNumber = text;
        summary += +firstNumber;
        input.value = summary;
        
        text = '';
        firstNumber = null;
    })

    equalSign.addEventListener('click', (event) => {

        switch (switcher) {
            case 1:
                summary += +secondNumber;
                input.value = summary;
                text = '';
                firstNumber = null;
                break;
            case 2:
                if (summary) {
                    summary -= +secondNumber;
                    input.value = summary;

                    text = '';
                    firstNumber = null;
                    break;
                }

                summary = substract(firstNumber, secondNumber);
                input.value = summary;
                
                text = '';
                firstNumber = null;
                break;
            case 3:
                if (summary) {
                    summary /= +secondNumber;
                    input.value = summary;

                    text = '';
                    firstNumber = null;
                    break;
                }

                summary = divide(firstNumber, secondNumber);
                input.value = summary;
                
                text = '';
                firstNumber = null;
                break;
            case 4:
                if (summary) {
                    summary *= +secondNumber;
                    input.value = summary;

                    text = '';
                    firstNumber = null;
                    break;
                }

                summary = multiply(firstNumber, secondNumber);
                input.value = summary;
                
                text = '';
                firstNumber = null;
                break;
        }
    })

    reset.addEventListener('click', (event) => {
        input.value = '';
        text = '';
        firstNumber = null;
        secondNumber = null;
        summary = 0;
        switcher = 0;
    })
    deleteSign.addEventListener('click', (event) => {
        text = summary.toString();
        text = text.slice(0, (text.length - 1));
        summary = +text;
        input.value = summary;
        if (isNaN(input.value)) {
            input.value = 0;
        }

        text = '';
        firstNumber = null;
    })
    
}) 

function add(a,b) {
    return a + b;
}

function substract(a,b) {
    return a - b;
}

function multiply(a,b) {
    return a * b;
}

function divide(a,b) {
    return a / b;
}

