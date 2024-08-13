/*5 - Verifique a categoria de um nadador

Escreva um programa que leia a idade de um nadador e use uma estrutura if/else para determinar a categoria do nadador de acordo com a idade:
            Infantil A: 5 - 7 anos
            Infantil B: 8 - 10 anos
            Juvenil A: 11 - 13 anos
            Juvenil B: 14 - 17 anos
            Adulto: 18 anos ou mais*/
            
const prompt = require('prompt-sync')();

let swimmerAge = Number(prompt('How old is the swimmer? '));;

//Validação da entrada de dados, aceitando apenas número.
if(isNaN(swimmerAge)){
    console.log('Enter numbers only!');
}else if(swimmerAge >= 5 && swimmerAge <= 7){
    console.log(`The swimmer's age is ${swimmerAge} and his category is junior A.`);
}else if(swimmerAge >= 8 && swimmerAge <= 10){
    console.log(`The swimmer's age is ${swimmerAge} and his category is junior B.`);
}else if(swimmerAge >= 11 && swimmerAge <= 13){
    console.log(`The swimmer's age is ${swimmerAge} and his category is juvenile A.`);
}else if(swimmerAge >= 14 && swimmerAge <= 17){
    console.log(`The swimmer's age is ${swimmerAge} and his category is juvenile B.`);
}else{
    console.log(`The swimmer's age is ${swimmerAge} and his category is adult A.`);
}