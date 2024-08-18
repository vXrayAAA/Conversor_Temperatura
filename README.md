# Conversor_Temperatura

# Conversor de Temperatura em JavaScript

## Descrição

Este projeto é um conversor de temperatura interativo em linha de comando, desenvolvido em JavaScript. Ele permite converter temperaturas entre Celsius, Fahrenheit e Kelvin.

## Funcionalidades

- Conversão de Celsius para Fahrenheit e Kelvin
- Conversão de Fahrenheit para Celsius e Kelvin
- Conversão de Kelvin para Celsius e Fahrenheit
- Interface de linha de comando interativa

## Tecnologias Utilizadas

- JavaScript
- Node.js
- Módulo `readline` para interação com o usuário

## Como Usar

1. Certifique-se de ter o Node.js instalado em seu sistema.
2. Clone este repositório ou copie o código para um arquivo `conversor_temperatura.js`.
3. Abra um terminal na pasta do projeto.
4. Execute o script com o comando:
   ```
   node conversor_temperatura.js
   ```
5. Siga as instruções na tela para selecionar a unidade de temperatura e inserir o valor.

## Estrutura do Código

O código está organizado em funções principais:

- `ConverteTemp()`: Realiza a conversão de Celsius para Fahrenheit e Kelvin.
- `SelecionaTemp(opcao)`: Gerencia a seleção da unidade de temperatura e direciona para a conversão apropriada.

## Exemplo de Uso

```
$ node conversor_temperatura.js
Selecione a unidade de temperatura para converter (Celsius, Fahrenheit, Kelvin):
Celsius
Digite o valor em Celsius:
25
Fahrenheit: 77
Kelvin: 298.15
```

## Código Fonte

```javascript
const readline = require('readline');
let Celsius = 0;
let Fahrenheit = 0;
let Kelvin = 0;

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function ConverteTemp() {
    Fahrenheit = (Celsius * 9/5) + 32;
    Kelvin = Celsius + 273.15;
    console.log(`Fahrenheit: ${Fahrenheit}`);
    console.log(`Kelvin: ${Kelvin}`);
}

function SelecionaTemp(opcao) {
    if (opcao === "Celsius") {
        console.log("Digite o valor em Celsius:");
        rl.question("", (input) => {
            Celsius = parseFloat(input);
            ConverteTemp();
            rl.close();
        });
    } else if (opcao === "Fahrenheit") {
        console.log("Digite o valor em Fahrenheit:");
        rl.question("", (input) => {
            Fahrenheit = parseFloat(input);
            Celsius = (Fahrenheit - 32) * 5/9;
            Kelvin = Celsius + 273.15;
            console.log(`Celsius: ${Celsius}`);
            console.log(`Kelvin: ${Kelvin}`);
            rl.close();
        });
    } else if (opcao === "Kelvin") {
        console.log("Digite o valor em Kelvin:");
        rl.question("", (input) => {
            Kelvin = parseFloat(input);
            Celsius = Kelvin - 273.15;
            Fahrenheit = (Celsius * 9/5) + 32;
            console.log(`Celsius: ${Celsius}`);
            console.log(`Fahrenheit: ${Fahrenheit}`);
            rl.close();
        });
    } else {
        console.log("Opção inválida.");
        rl.close();
    }
}

console.log("Selecione a unidade de temperatura para converter (Celsius, Fahrenheit, Kelvin):");
rl.question("", (opcao) => {
    SelecionaTemp(opcao);
});
```

## Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para forkar o projeto, fazer melhorias e enviar um pull request.

