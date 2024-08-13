/*4 - Verifique se um número é par ou ímpar

Escreva um programa que leia um número e use uma estrutura  if/else para verificar se o número é par ou ímpar. Imprima uma mensagem apropriada.*/

const prompt = require('prompt-sync')();

const inputNumber = Number(prompt('Enter a number to check if it is even or odd: '));

if(inputNumber % 2 === 0){
    console.log(`The number ${inputNumber} is even.`);
}else{
    console.log(`The number ${inputNumber} is odd.`);
}