# Lista de Exercícios: Estruturas Condicionais em JavaScript

Este repositório contém uma série de exercícios para praticar a utilização de estruturas condicionais (`if`, `if/else`, `switch`) em JavaScript. Abaixo está uma descrição de cada exercício, além de instruções sobre como executar os códigos.

## Exercícios

### 1. Verifique se um número é positivo, negativo ou zero
**Como foi feito:**
- **Entrada de Dados:** O programa lê um número do usuário usando `prompt-sync`.
- **Estrutura Condicional:** Utiliza `if/else` para verificar se o número é maior que zero (positivo), menor que zero (negativo) ou igual a zero.
- **Saída:** Imprime uma mensagem correspondente ao resultado da verificação.

### 2. Verifique se um ano é bissexto
**Como foi feito:**
- **Entrada de Dados:** O programa lê um ano do usuário.
- **Estrutura Condicional:** Usa uma condição `if/else` para verificar se o ano é divisível por 4, não divisível por 100, exceto se for divisível por 400 (regras para anos bissextos).
- **Saída:** Imprime se o ano é bissexto ou não.

### 3. Calcule a média de três números e determine o conceito
**Como foi feito:**
- **Entrada de Dados:** O programa lê três notas do usuário.
- **Cálculo:** Calcula a média das três notas.
- **Estrutura Condicional:** Usa `if/else` para determinar o conceito com base na média calculada, seguindo intervalos predefinidos para cada conceito (A, B, C, D, E, F).
- **Saída:** Imprime a média e o conceito correspondente.

### 4. Verifique se um número é par ou ímpar
**Como foi feito:**
- **Entrada de Dados:** O programa lê um número do usuário.
- **Estrutura Condicional:** Utiliza `if/else` para verificar se o número é divisível por 2 (par) ou não (ímpar).
- **Saída:** Imprime se o número é par ou ímpar.

### 5. Verifique a categoria de um nadador
**Como foi feito:**
- **Entrada de Dados:** O programa lê a idade do nadador.
- **Estrutura Condicional:** Usa `if/else` para classificar a idade em uma categoria específica com base em faixas etárias.
- **Saída:** Imprime a categoria do nadador com base na idade fornecida.

### 6. Verifique o dia da semana
**Como foi feito:**
- **Entrada de Dados:** O programa lê um número de 1 a 7.
- **Estrutura `switch`:** Utiliza `switch` para mapear o número para o dia da semana correspondente (Domingo, Segunda-feira, etc.).
- **Saída:** Imprime o nome do dia da semana correspondente ao número fornecido.

### 7. Calcule o valor de uma expressão matemática simples
**Como foi feito:**
- **Entrada de Dados:** O programa lê dois números e um operador matemático (+, -, *, /).
- **Estrutura `switch`:** Usa `switch` para realizar a operação matemática baseada no operador fornecido e calcula o resultado.
- **Verificação:** Se o operador for divisão, verifica se o divisor é zero para evitar erros.
- **Saída:** Imprime o resultado da operação matemática.

### 8. Verifique a estação do ano
**Como foi feito:**
- **Entrada de Dados:** O programa lê um número de 1 a 4.
- **Estrutura `switch`:** Usa `switch` para mapear o número para a estação do ano correspondente (Primavera, Verão, Outono, Inverno).
- **Saída:** Imprime o nome da estação do ano correspondente ao número fornecido.

### 9. Verifique a faixa etária de uma pessoa
**Como foi feito:**
- **Entrada de Dados:** O programa lê a idade da pessoa.
- **Estrutura Condicional:** Usa `if/else` para determinar a faixa etária com base na idade.
- **Estrutura `switch`:** Usa `switch` para imprimir uma mensagem específica para cada faixa etária (Criança, Adolescente, Adulto, Idoso).
- **Saída:** Imprime uma mensagem que indica a faixa etária da pessoa.

### 10. Calcule o IMC e determine a categoria
**Como foi feito:**
- **Entrada de Dados:** O programa lê o peso e a altura do usuário.
- **Cálculo:** Calcula o Índice de Massa Corporal (IMC) usando a fórmula IMC = peso / altura².
- **Estrutura `switch`:** Usa `switch` com condições booleanas para determinar a categoria do IMC com base em intervalos predefinidos.
- **Saída:** Imprime o valor do IMC e a categoria correspondente (Abaixo do peso, Peso normal, Sobrepeso, etc.).


## Como Executar

1. **Pré-requisitos:** Certifique-se de ter o [Node.js](https://nodejs.org/) instalado em sua máquina.

2. **Instalação:** Navegue até o diretório onde os arquivos dos exercícios estão localizados e instale o pacote `prompt-sync`:
   ```bash
   npm install prompt-sync

## Execução

Para executar qualquer um dos exercícios, abra o terminal, navegue até o diretório do arquivo desejado e utilize o comando:

```bash
node nome_do_arquivo.js
```
Siga as instruções que aparecerão no terminal para interagir com o programa.

## Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para fazer um fork deste repositório, enviar pull requests ou abrir issues para sugerir melhorias.
