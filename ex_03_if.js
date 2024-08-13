/*3 - Calcule a média de três números e determine o conceito
Escreva um programa que leia três notas de um aluno, calcule a média e use uma estrutura if/else para determinar o conceito (A, B, C, D, E, F) baseado na média. Imprima o conceito.

Dica: A média é a soma das notas dividida por três. Defina os intervalos para cada conceito.*/
const prompt = require('prompt-sync')();

let grade1 = Number(prompt('Informe a primeira nota: '));
let grade2 = Number(prompt('Informe a segunda nota: '));
let grade3 = Number(prompt('Informe a terceira nota: '));

const average = (grade1 + grade2 + grade3) / 3;
let concept = '';

if(average >= 80){
    console.log(`A média das notas é ${average.toFixed(2)}`);
    concept = 'A';
    console.log(`O conceito é ${concept}.`);
}else if( average >= 60){
    console.log(`A média das notas é ${average.toFixed(2)}`);
    concept = 'B';
    console.log(`O conceito é ${concept}.`);
}else if( average >= 40){
    console.log(`A média das notas é ${average.toFixed(2)}`);concept = 'C';
}else if( average >= 20){
    console.log(`A média das notas é ${average.toFixed(2)}`);
    concept = 'D';
    console.log(`O conceito é ${concept}.`);
}else if( average >= 10){
    console.log(`A média das notas é ${average.toFixed(2)}`);
    concept = 'E';
    console.log(`O conceito é ${concept}.`);
}else{
    console.log(`A média das notas é ${average.toFixed(2)}`);
    concept = 'F';
    console.log(`O conceito é ${concept}.`);
}