/*6 - Verifique o dia da semana
Escreva um programa que leia um número de 1 a 7 e use uma estrutura switch para imprimir o dia da semana correspondente. (1 =
Domingo, 2 = Segunda-feira, etc.)*/

const prompt = require('prompt-sync')();

let dayOfTheWeek = Number(prompt('Enter a number between 1 and 7 for the day of the week: '));

if(isNaN(dayOfTheWeek)){
    console.log('Error: Invalid input! Enter only numbers between 1 and 7.');
}

switch(dayOfTheWeek){
    case 1:
        console.log('Sunday');
        break;
    case 2:
        console.log('Monday');
        break;
    case 3:
        console.log('Tuesday');
        break;
    case 4:
        console.log('Wednesday');
        break;
    case 5:
        console.log('Thursday');
        break;
    case 6:
        console.log('Friday');
        break;
    case 7:
        console.log('Saturday');
        break;
    default:
        console.log('Enter a valid number! Beetween 1 and 7.');
}