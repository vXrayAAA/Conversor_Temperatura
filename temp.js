const readline = require('readline');  // Processar linha por linha no terminal.

let Celsius = 0; // Var 
let Fahrenheit = 0; // Var
let Kelvin = 0; // Var

const rl = readline.createInterface
({
    input: process.stdin,   // input: process.stdin: Define o fluxo de entrada como process.stdin, que é o fluxo de entrada padrão (normalmente o teclado do usuário).
    output: process.stdout  // output: process.stdout: Define o fluxo de saída como process.stdout, que é o fluxo de saída padrão (normalmente a tela do terminal).
});

function ConverteTemp() // Conversor de temperatura 
{
    Fahrenheit = (Celsius * 9/5) + 32;  // Conversor Fahrenheit
    Kelvin = Celsius + 273.15;          // Conversor Kelvin
    console.log(`Fahrenheit: ${Fahrenheit}`);   // Print do valor com interpolacao
    console.log(`Kelvin: ${Kelvin}`);           // Printo do valor com interpolacao
}

function SelecionaTemp(opcao)   // Funcao para selicionar o conversor (C/F/K)
{
    if (opcao === "Celsius")    //Se for Celsius  
        {
        console.log("Digite o valor em Celsius:"); // digito o valor
        rl.question("", (input) =>      // Recebendo a pergunta do usuario e convertendo
            {
            Celsius = parseFloat(input);  // valor convertido atribuido a variavel
            ConverteTemp();  // Chama a function onde usa a minha variavel
            rl.close();  // fecha interface do user
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