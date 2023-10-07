document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('calc');
    let summary = 0;
    let currentNumber = null;
    let calcTypeChanger = undefined;
    let inputText = input.value;

    const numbers = document.querySelectorAll('.number')

    const deleteSign = document.querySelector('.delete');
    const plus = document.querySelector('.plusSign');
    const minus = document.querySelector('.minusSign');
    const divider = document.querySelector('.divider');
    const multiplier = document.querySelector('.multiplier');

    const reset = document.querySelector('.reset');
    const equalSign = document.querySelector('.equalSign');

    input.addEventListener('input', (event) => {
        inputText = event.target.value;
        currentNumber = +inputText;
    })

    for (const number of numbers) {
        number.addEventListener('click', (event) => {
            inputText += event.target.innerText;
            input.value = inputText;
            currentNumber = +inputText;
            myDebug()
        })
    };

    function applyOperation() {
        if (currentNumber === null) {
            return
        }

        if (calcTypeChanger) {
            summary = calculateNumbers(summary, currentNumber, calcTypeChanger);
        } else {
            summary = currentNumber;
        }

        input.value = summary;
        currentNumber = null;
        inputText = '';
    }

    function removeActiveOperation() {
        plus.classList.remove('activeButton');
        minus.classList.remove('activeButton');
        divider.classList.remove('activeButton');
        multiplier.classList.remove('activeButton');
    }

    function selectActiveOperation(e) {
        removeActiveOperation();
        e.target.classList.add('activeButton');
    }

    plus.addEventListener('click', (e) => {
        applyOperation();
        calcTypeChanger = 'plus';
        myDebug();
        selectActiveOperation(e)
    })

    minus.addEventListener('click', (e) => {
        applyOperation();
        calcTypeChanger = 'minus';
        myDebug();
        selectActiveOperation(e)
    })

    divider.addEventListener('click', (e) => {
        applyOperation();
        calcTypeChanger = 'divider';
        myDebug();
        selectActiveOperation(e)
    })
    
    multiplier.addEventListener('click', (e) => {
        applyOperation();
        calcTypeChanger = 'multiplier';
        myDebug();
        selectActiveOperation(e)
    })

    equalSign.addEventListener('click', (e) => {
        applyOperation();
        myDebug();
    })

    reset.addEventListener('click', () => {
        input.value = '';
        inputText = '';
        currentNumber = null;
        summary = 0;
        calcTypeChanger = undefined;
        myDebug();
        removeActiveOperation();
    })

    deleteSign.addEventListener('click', () => {
        let value = input.value;
        value = value.slice(0, (value.length - 1));
        input.value = value;
        if (isNaN(input.value)) {
            input.value = 0;
        }
        currentNumber = input.value;
        myDebug();
    })
   
    function myDebug() {
        debug(summary, currentNumber, calcTypeChanger);
    }
}) 

function calculateNumbers(a, b, operation) {
    switch (operation) {
        case 'plus':
            return add(a,b);
        case 'minus':
            return substract(a,b);
        case 'divider':
            return divide(a,b);
        case 'multiplier':
            return multiply(a,b);
    }
}

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


function debug(summary, currentNumber, calcTypeChanger) {
    const d = document.getElementById('debug');
    d.innerHTML = `${summary} ${calcTypeChanger} ${currentNumber}`
}