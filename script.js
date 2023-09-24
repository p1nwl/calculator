document.addEventListener('DOMContentLoaded', () => {
    const input = document.querySelector('.input');
    const button = document.querySelector('.button');
    const output = document.querySelector('.output');
    const outputText = output.innerText;
    let text = 0;
    let numberOne = null;
    let numberTwo = null;
    console.log(numberOne === null)

    button.addEventListener('click', () => {

        if (numberOne === null) {
            numberOne = text;
            input.value = '0';
            return;
        }

        if (numberTwo === null) {
            numberTwo = text;
        }
        
        if (numberOne && numberTwo) {
            output.innerText = outputText + ' ' + increase(numberOne, numberTwo);
        }

        input.value = '0';
    })
    
    input.addEventListener('input', (event) => {
        text = event.target.value;
    })
    
}) 

function increase(a,b) {
    return a * b;
}
