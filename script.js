document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('calc');
    let text = input.value;
    let summary = 0;
    let firstNumber = null;
    let secondNumber = null;

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
    })

    zero.addEventListener('click', (event) => {
        text = text + event.target.innerText;
        input.value = text;
    })
    one.addEventListener('click', (event) => {
        text = text + event.target.innerText;
        input.value = text;
    })
    two.addEventListener('click', (event) => {
        text = text + event.target.innerText;
        input.value = text;
    })
    three.addEventListener('click', (event) => {
        text = text + event.target.innerText;
        input.value = text;
    })
    four.addEventListener('click', (event) => {
        text = text + event.target.innerText;
        input.value = text;
    })
    five.addEventListener('click', (event) => {
        text = text + event.target.innerText;
        input.value = text;
    })
    six.addEventListener('click', (event) => {
        text = text + event.target.innerText;
        input.value = text;
    })
    seven.addEventListener('click', (event) => {
        text = text + event.target.innerText;
        input.value = text;
    })
    eight.addEventListener('click', (event) => {
        text = text + event.target.innerText;
        input.value = text;
    })
    nine.addEventListener('click', (event) => {
        text = text + event.target.innerText;
        input.value = text;
    })

    plus.addEventListener('click', (event) => {
        
        if (firstNumber === null) {
            firstNumber = text;
            text = '';
            input.value = '';
            return;
        }

        if (secondNumber === null) {
            secondNumber = text;
            text = '';
            input.value = '';
        }

        if (firstNumber && secondNumber) {
            text = summ(+firstNumber, +secondNumber);
            input.value = text;
            text = '';
            firstNumber = null;
            secondNumber = null;
        }

        input.value = '';
    })

    equalSign.addEventListener('click', (event) => {
        if (secondNumber === null) {
            secondNumber = text;
        }

        if (firstNumber && secondNumber) {
            text = summ(+firstNumber, +secondNumber);
            input.value = text;
            text = '';
        }

        firstNumber = null;
        secondNumber = null;
    })

    reset.addEventListener('click', (event) => {
        input.value = '';
        text = '';
        firstNumber = null;
        secondNumber = null;
    })
    
    // const output = document.querySelector('.output');
    // const outputText = output.innerText;
    // let text = 0;
    // let numberOne = null;
    // let numberTwo = null;
    // console.log(numberOne === null)

    // button.addEventListener('click', () => {

    //     if (numberOne === null) {
    //         numberOne = text;
    //         input.value = '0';
    //         return;
    //     }

    //     if (numberTwo === null) {
    //         numberTwo = text;
    //     }
        
    //     if (numberOne && numberTwo) {
    //         output.innerText = outputText + ' ' + increase(numberOne, numberTwo);
    //     }

    //     input.value = '0';
    // })
    
}) 

function summ(a,b) {
    return a + b;
}
