/*9 - Verifique a faixa etária de uma pessoa
Escreva um programa que leia a idade de uma pessoa e use uma estrutura if/else para determinar a faixa etária:
             Criança: 0 - 12 anos
             Adolescente: 13 - 17 anos
             Adulto: 18 - 59 anos
             Idoso: 60 anos ou mais
 Dica: Utilize uma estrutura switch dentro do bloco if/else para imprimir uma mensagem específica para cada faixa etária.*/

const prompt = require('prompt-sync')();

let age = Number(prompt('Informe a sua idade: '))
let ageRange

if(age >= 0 && age <= 12){
    ageRange = 'Criança'
}else if(age > 12 && age <= 17){
    ageRange = 'Adolescente'
}else if(age > 17 && age <= 59){
    ageRange = 'Adulto'
}else{
    ageRange = 'Idose'
}

switch(ageRange){
    case 'Criança':
        console.log("Você é uma criança!");
        break
    case 'Adolescente':
        console.log("Você é um(a) adolescente!");
        break
    case 'Adulto':
        console.log("Vocêo é um(a) adulto!");
        break
    case 'Idoso':
        console.log("Você é um(a) idoso(a)!");
        break
    default:
        console.log("Idade inválida!");        
}