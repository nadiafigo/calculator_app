const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalButton = document.querySelector('[data-equal]')
const deleteButton = document.querySelector('[data-delete]')
const resetButton = document.querySelector('[data-reset]')
const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')
const displayOutput = document.getElementById('output')

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        displayOutput.innerText = (displayOutput.innerText + button.innerText)
    })
})

operationButtons.forEach(operator => {
    operator.addEventListener('click', () => {
    displayOutput.innerText = (displayOutput.innerText + operator.innerText)
    operador = operator.innerText
    })
})

let operador
let output


equalButton.addEventListener('click', equal => {
    let cantidad = displayOutput.innerText
    let index = cantidad.indexOf(operador) 
    let number1str = cantidad.substring(0,index)
    let number2str = cantidad.substring(index+1)

    let number1 = parseFloat(number1str)
    let number2 = parseFloat(number2str)

    let output

    switch (operador) {
        case '+':
            output = number1 + number2
            break
        case '-':
            output = number1 - number2
            break
        case '/':
            output = number1 / number2
            break
        case 'x':
            output = number1 * number2
            break
    }

    var output_rounded = Math.round((output + Number.EPSILON)*100)/100
    displayOutput.innerText = output_rounded
})


deleteButton.addEventListener ('click', button => {
    let cantidad = displayOutput.innerText
    let caracteres = cantidad.length
    displayOutput.innerText = cantidad.substring(0,caracteres -1)
})

resetButton.addEventListener ('click', button => {
    displayOutput.innerText = ''
})

