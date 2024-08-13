/*8 - Verifique a estação do ano

Escreva um programa que leia um número de 1 a 4 e use uma estrutura switch para imprimir a estação do ano correspondente. (1 =
Primavera, 2 = Verão, 3 = Outono, 4 = Inverno)*/

const promprt = require('prompt-sync')();

let userOption = Number(promprt('Enter with number between 1 and 4: '));

switch(userOption){
    case 1:
        console.log(`Spring`);
        break;
    case 2:
        console.log(`Summer`);
        break;
    case 3:
        console.log(`Fall`);
        break;
    case 4:
        console.log(`Winter`);
        break;
    default:
        console.log(`Error: Invalid number! Enter with number between 1 and 4.`); 
}