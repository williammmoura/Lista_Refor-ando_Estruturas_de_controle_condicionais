/*7 - Calcule o valor de uma expressão matemática simples

Escreva um programa que leia dois números e um operador (+, -, *, /) e use uma estrutura switch para calcular o resultado da operação.
Imprima o resultado.

Dica: Utilize os operadores aritméticos em cada caso do switch.*/

const prompt = require('prompt-sync')();

let number1 = Number(prompt('Enter with the firtst number: '));
let mathOperator = prompt('Enter with a math operator (+, -, *, /): ');
let number2 = Number(prompt('Enter with the second number: '));
let result;

switch(mathOperator){
    case '+':
        result = number1 + number2;
        console.log(`${result} = ${number1} + ${number2}`);
        break;
    case '-':
        result = number1 - number2;
        console.log(`${result} = ${number1} - ${number2}`);
        break;
    case '*':
        result = number1 * number2;
        console.log(`${result} = ${number1} * ${number2}`);
        break;
    case '/':
        if (number2 !== 0) {
            result = number1 / number2;
            console.log(`Result: ${number1} / ${number2} = ${result}`);
        } else {
            console.log('Error: Division by zero is not allowed.');
        }
    default:
        console.log(`Error: Invalid operator.`);
        break;
}