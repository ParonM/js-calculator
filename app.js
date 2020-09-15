let numerals = [0,1,2,3,4,5,6,7,8,9];



let number1 = '';
let operation = '';
let number2 = '';
let display = document.getElementById('display');


function calculate(input) {
    if(numerals.includes(parseFloat(input.innerHTML))) {
        if (operation) {
            number2 += input.innerHTML;
            display.value = number1 + operation + number2;
        } else {
            number1 += input.innerHTML;
            display.value = number1;
        }
    } else{
        
        if (number2) {
            let result = eval(number1 + operation + number2);
            display.value = result + input.innerHTML;
            number1 = result;
            operation = input.innerHTML;
            number2 = '';
        } else {
            operation = input.innerHTML;
            display.value = number1 + operation;
        }
    }
};

