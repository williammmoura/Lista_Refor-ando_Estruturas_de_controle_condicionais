const prompt = require('prompt-sync')();

let userWeight = Number(prompt('Enter your weight:(Kg) '));
let userHeight = Number(prompt('Enter your height:(cm) ') / 100);

const bodyMassIndex = userWeight / (userHeight ** 2);

let category;

/*Aqui, usamos "true" como o argumento do switch. Dessa forma, cada "case"
verifica se a condição é verdadeira. Como as condições são expressões
booleanas, isso permite fazer comparações usando "switch/case".*/

switch (true) {
    case (bodyMassIndex < 18.5):
        category = 'Underweight';
        break;
    case (bodyMassIndex < 25):
        category = 'Normal weight';
        break;
    case (bodyMassIndex < 30):
        category = 'Overweight';
        break;
    case (bodyMassIndex < 35):
        category = 'Grade I obesity';
        break;
    case (bodyMassIndex < 40):
        category = 'Grade II obesity';
        break;
    default:
        category = 'Grade III obesity';
        break;
}

console.log(`Your body mass index is: ${bodyMassIndex.toFixed(2)} (${category})`);
