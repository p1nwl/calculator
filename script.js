document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('calc');
    let text = input.value;
    let summary = 0;
    let firstNumber = null;
    let secondNumber = null;
    let switcher = 0;

    const zero = document.querySelector('.buttonZero');
    const one = document.querySelector('.buttonOne');
    const two = document.querySelector('.buttonTwo');
    const three = document.querySelector('.buttonThree');
    const four = document.querySelector('.buttonFour');
    const five = document.querySelector('.buttonFive');
    const six = document.querySelector('.buttonSix');
    const seven = document.querySelector('.buttonSeven');
    const eight = document.querySelector('.buttonEight');
    const nine = document.querySelector('.buttonNine');

    const deleteSign = document.querySelector('.delete');
    const plus = document.querySelector('.plusSign');
    const minus = document.querySelector('.minusSign');
    const divider = document.querySelector('.divider');
    const multiplier = document.querySelector('.multiplier');
    const dot = document.querySelector('.dot');

    const reset = document.querySelector('.reset');
    const equalSign = document.querySelector('.equalSign');

    input.addEventListener('input', (event) => {
        text = event.target.value;
        secondNumber = text;
    })

    zero.addEventListener('click', (event) => {
        text += event.target.innerText;
        input.value = text;
        secondNumber = text;
    })
    one.addEventListener('click', (event) => {
        text += event.target.innerText;
        input.value = text;
        secondNumber = text;
    })
    two.addEventListener('click', (event) => {
        text += event.target.innerText;
        input.value = text;
        secondNumber = text;
    })
    three.addEventListener('click', (event) => {
        text += event.target.innerText;
        input.value = text;
        secondNumber = text;
    })
    four.addEventListener('click', (event) => {
        text += event.target.innerText;
        input.value = text;
        secondNumber = text;
    })
    five.addEventListener('click', (event) => {
        text += event.target.innerText;
        input.value = text;
        secondNumber = text;
    })
    six.addEventListener('click', (event) => {
        text += event.target.innerText;
        input.value = text;
        secondNumber = text;
    })
    seven.addEventListener('click', (event) => {
        text += event.target.innerText;
        input.value = text;
        secondNumber = text;
    })
    eight.addEventListener('click', (event) => {
        text += event.target.innerText;
        input.value = text;
        secondNumber = text;
    })
    nine.addEventListener('click', (event) => {
        text += event.target.innerText;
        input.value = text;
        secondNumber = text;
    })
    dot.addEventListener('click', (event) => {
        text += event.target.innerText;
        input.value = text;
        secondNumber = text;
    })

    plus.addEventListener('click', (event) => {

        switcher = 1;
        firstNumber = text;
        summary += +firstNumber;
        input.value = summary;
        
        text = '';
        firstNumber = null;
    })
    minus.addEventListener('click', (event) => {

        switcher = 2;
        firstNumber = text;
        summary -= +firstNumber;
        input.value = summary;
        
        text = '';
        firstNumber = null;
    })
    divider.addEventListener('click', (event) => {

        switcher = 3;
        firstNumber = text;
        summary /= +firstNumber;
        input.value = summary;
        
        text = '';
        firstNumber = null;
    })
    multiplier.addEventListener('click', (event) => {

        switcher = 4;
        firstNumber = text;
        summary *= +firstNumber;
        input.value = summary;
        
        text = '';
        firstNumber = null;
    })

    equalSign.addEventListener('click', (event) => {

        switch (switcher) {
            case 1:
                if (secondNumber) {
                    summary += +(secondNumber);
                    input.value = summary;
                    text = '';
                    firstNumber = null;
                    break;
                }
                break;
            case 2:
                if (secondNumber) {
                    summary += +secondNumber;
                    input.value = summary;
                    break;
                }
        
                if (firstNumber && secondNumber) {
                    summary = substract(+firstNumber, +secondNumber);
                    input.value = summary;
                    text = '';
                }
                break;
            case 3:
                if (secondNumber) {
                    summary += +secondNumber;
                    input.value = summary;
                    break;
                }
        
                if (firstNumber && secondNumber) {
                    summary = divide(+firstNumber, +secondNumber);
                    input.value = summary;
                    text = '';
                }
                break;
            case 4:
                if (secondNumber) {
                    summary += +secondNumber;
                    input.value = summary;
                    break;
                }
        
                if (firstNumber && secondNumber) {
                    summary = multiply(+firstNumber, +secondNumber);
                    input.value = summary;
                    text = '';
                }
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
        text = text.slice(0, (text.length - 1));
        input.value = text;
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

