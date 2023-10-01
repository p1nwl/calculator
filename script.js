document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('calc');
    let text = input.value;
    let summary = 0;
    let firstNumber = null;
    let secondNumber = null;
    let calcTypeChanger = 0;

    // const calcArray = {
    //     text: input.value,
    //     summary: 0,
    //     firstNumber: null,
    //     secondNumber: null,
    //     calcTypeChanger: 0
    // }

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

    plus.addEventListener('click', () => {

        calcTypeChanger = 1;
        firstNumber = text;
        summary += +firstNumber;
        input.value = summary;
        
        text = '';
        firstNumber = null;
    })
    minus.addEventListener('click', (event) => {

        if (!(secondNumber)) {
            text = event.target.innerText;
            input.value = text;
            return;
        }

        calcTypeChanger = 2;

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
    divider.addEventListener('click', () => {

        calcTypeChanger = 3;

        firstNumber = text;
        summary += +firstNumber;
        input.value = summary;
        
        text = '';
        firstNumber = null;
    })
    multiplier.addEventListener('click', () => {

        calcTypeChanger = 4;

        firstNumber = text;
        summary += +firstNumber;
        input.value = summary;
        
        text = '';
        firstNumber = null;
    })

    equalSign.addEventListener('click', () => {

        switch (calcTypeChanger) {
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

    reset.addEventListener('click', () => {
        input.value = '';
        text = '';
        firstNumber = null;
        secondNumber = null;
        summary = 0;
        calcTypeChanger = 0;
    })
    deleteSign.addEventListener('click', () => {
        text = input.value;
        text = text.slice(0, (text.length - 1));
        input.value = text;
        if (isNaN(input.value)) {
            input.value = 0;
        }
        console.log(input.value);

        summary = 0;
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

