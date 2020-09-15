
var numbers = document.querySelectorAll('.number');
var operations = document.querySelectorAll('.operation');
var decimalBtn = document.getElementById('decimal');
var c = document.getElementById('c');
var resultBtn = document.getElementById('result');
var display = document.getElementById('display');
var MemoryCurrentNumber = 0;
var MemoryNewNumber = false;
var MemoryPendingOperation = '';

for (var i=0; i<numbers.lenght; i++) {
    var number = numbers[i];
    number.addEventListener('click', function(e) {
        numberPress(e.target.textContetnt);
    });
};

for (var i=0; i<operations.lenght; i++) {
    var operationBtn = operations[i];
    operationBtn.addEventListener('click', function(e) {
        operation(e.target.textContent);
    });
};

decimalBtn.addEventListener('click', decimal); 

c.addEventListener('click', clear);

resultBtn.addEventListener('click', result);





function numberPress(number) {
    if (MemoryNewNumber) {
        display.value = number;
        MemoryNewNumber = false;
    } else{
        if (display.value === '0') {
            display.value = number;
        } else {
            display.value += number;
        };
    };
    console.log('Клик по кнопке с номером ' + number + '!');
}; // press the button

function operation(op) {
    localOperationMemory = display.value;

    if (MemoryNewNumber) {
        display.value = MemoryCurrentNumber;
    } else {
        MemoryNewNumber = true;
    } if (MemoryPendingOperation === '+') {
        MemoryCurrentNumber += parseFloat(localOperationMemory);
    } else if (MemoryPendingOperation === '-') {
        MemoryCurrentNumber -= parseFloat(localOperationMemory);
    } else if (MemoryPendingOperation === '*') {
        MemoryCurrentNumber *= parseFloat(localOperationMemory);
    } else if (MemoryPendingOperation === '/') {
        MemoryCurrentNumber /= parseFloat(localOperationMemory);
    } else {
        MemoryCurrentNumber = localOperationMemory;
    };

    display.value = MemoryCurrentNumber;
    MemoryPendingOperation = op;

    console.log('Клик по кнопке с операцией ' + symbol + '!');
}; // умножение, деление, плюс, минус

function decimal(argument) {
    console.log('Клик по кнопке с десятичной дробью!');
}; // для десятичной точки

function clear(argument) {
    console.log('Клик по кнопке для очистки результатов!');
}; // для отчистки результатов

function result(argument) {
    console.log('Клик по кнопке для очистки результа (равно)!');
}