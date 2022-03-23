function add(num1, num2) {
  return num1+num2
}

function subtract(num1, num2) {
  return num1-num2
}

function multiply(num1, num2) {
  return num1*num2
}

function divide(num1, num2) {
  if (num2==0) {
    return 'Error!'
  }
  return num1/num2
}

function operate(operator, num1, num2) {
  let result=0
  switch (operator) {
    case '+':
      result = add(num1, num2);
      break;

    case '-':
      result = subtract(num1,num2);
      break;

    case '*':
      result = multiply(num1,num2);
      break;

    case '/':
      result = divide(num1,num2);
      break;
  }
  return result
}

function showResult() {
    let result=0
    const num1 = +number1
    const num2 = +number2
    const display = document.querySelector('.display')
    result = operate(operator, num1, num2)
    display.textContent = result
    number1=result.toString()
    number2=""
}

function buttonClicked(e) {
  const label = e.target.textContent
  const re= new RegExp("[0-9]")
  const reOperator= new RegExp("[\*\+\/\-]")
  const display = document.querySelector('.display')
  if (re.test(label) && !operatorPressed) {
    number1 += label
    display.textContent = number1
  }
  else if (reOperator.test(label)) {
    if (number2 !== ""){
      showResult()
    }
    operatorPressed = true;
    operator = label;
  }
  else if (re.test(label) && operatorPressed) {
    number2 += label
    display.textContent = number2
  }
  else if (label === '='){
    if (number1 === "" && number2 === "") {
      return
    }
    showResult()
  }
  else {
    display.textContent="0"
    number1 = ""
    number2 = ""
    operatorPressed = false
    operator = ""
  }
}

let number1 ="" 
let number2 ="" 
let operatorPressed = false
let operator = "" 
const buttons = document.querySelectorAll('button')
buttons.forEach(button => button.addEventListener('click', buttonClicked))
