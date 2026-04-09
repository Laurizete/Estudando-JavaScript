// 1- criando uma função
function saudacao() {
    console.log("Olá, seja bem-vindo!");
}

// 1.1 chamando a função
saudacao();

const saudacao2 = function() {
    console.log("Olá, seja bem-vindo!");
}

// 1.2 chamando a função
saudacao2();

// 1.3 função com parâmetro
function saudacao3(nome) {
    console.log(`Olá, ${nome}, seja bem-vindo!`);
}

// 1.4 chamando a função
saudacao3("Maria");


// 2 - return (função com retorno)
    const a = 10;
    const b = 20;
    const c = 30;   

function soma(a, b) {
    return a + b;
}
const resultado = soma(a, b);
    console.log(resultado);
    console.log(soma(a, c));
   
// 3 - escopo da função

let y = 5; // variável global

function teste2() {
    let y = 10; // variável local
    console.log('y dentro da função é: ' + y); // imprime 10
}
teste2();
console.log('y fora da função é: ' + y); // imprime 5, pois a variável global não foi alterada

function teste() {
    const x = 10; // variável local
    console.log('x dentro da função é: ' + x);
}
teste();
// console.log(x); // erro, variável x não existe fora da função    

// 4 - escopo aninhado

function funcaoExterna() {
    const a = 10; // variável local da função externa

    function funcaoInterna() {
        const b = 20; // variável local da função interna
        console.log('a dentro da função interna é: ' + a); // acessa a variável da função externa
        console.log('b dentro da função interna é: ' + b); // acessa a variável local da função interna
    }

    funcaoInterna();
    // console.log(b); // erro, variável b não existe na função externa
}
funcaoExterna();

// 5 - função anônima e arrow function
const testearrow = () => {
    console.log("Esta é uma função arrow!");
}
testearrow();

const parOuImpar = (numero) => {
    if (numero % 2 === 0) {
        console.log("Par");
        return;
    }
    console.log("Ímpar");
    return;
}
parOuImpar(10);
parOuImpar(7);

// 6 - mais sobre arrow function
const somaArrow = (a, b) => a + b; // função de uma linha, retorna o resultado automaticamente
console.log(somaArrow(5, 3));

const saudacaoArrow = nome => `Olá, ${nome}!`; // função com um único parâmetro, sem parênteses
console.log(saudacaoArrow("João"));

const raizQuadrada = numero => {
    if (numero < 0) {
        console.log("Número inválido para raiz quadrada.");
        return;
    }
    return Math.sqrt(numero);// função com corpo mais complexo, usando chaves e return explícito
}
console.log(raizQuadrada(16));
console.log(raizQuadrada(-4));

// 6 - parametro opcional
function saudacaoOpcional(nome = "Visitante") {
    console.log(`Olá, ${nome}!`);
}
saudacaoOpcional("Ana");
saudacaoOpcional(); // usa o valor padrão "Visitante"   

const multiplicar = (a, b = 1) => a * b; // parâmetro b é opcional, com valor padrão 1
console.log(multiplicar(5, 2)); // retorna 10
console.log(multiplicar(5)); // retorna 5, pois b assume o valor padrão 1


const multiplication = function ( m,n) {
  if (m === undefined) {
    return m * n;
} else {
    return m * n;
 }
}; 
console.log(multiplication(2, 4)); // retorna 8
console.log(multiplication(5)); // retorna NaN, pois m é undefined e não pode ser multiplicado por n

const greeting = (name) => {
    if (!name) {
        console.log("Olá, visitante!");
    } else {
        console.log(`Olá, ${name}!`);
    }
}
 greeting(); // retorna "Olá, visitante!"
 greeting("Carlos"); // retorna "Olá, Carlos!"


 // 8 - valor default 
 
 const customGreeting = (name , greet = "visitante") => {
    return  `${greet}, ${name}!`;
 }
 console.log(customGreeting("Maria")); // retorna "visitante, Maria!"
 
 console.log(customGreeting("Maria", "Olá")); // retorna "Olá, Maria!"

 const repeatText = (text, repeat = 2) => {
   for (let i = 0; i < repeat; i++) {
       console.log(text);
   }
 }
 console.log(repeatText("testando ")); // retorna "testando " duas vezes
 console.log(repeatText("Agora repete 3 vezes ", 3)); // retorna "Agora repete 3 vezes Agora repete 3 vezes Agora repete 3 vezes "


 // 9 - Closure 
 function someFunction() {
    let text = "Olá, mundo!"; // variável local da função someFunction
 
    function displayText() {
        console.log(text); // a função displayText tem acesso à variável text da função someFunction
    }
 
    displayText(); // chama a função displayText dentro de someFunction
    }

    someFunction(); // chama a função someFunction, que por sua vez chama displayText e imprime "Olá, mundo!"

// 10 - mais sobre closure

function createCounter() {
    let count = 0; // variável local da função createCounter

    return function() { // retorna uma função anônima que é um closure
        count++; // a função retornada tem acesso à variável count da função createCounter
        console.log(count); // imprime o valor atualizado de count
    }
}

const counter = createCounter();
counter(); // imprime 1
counter(); // imprime 2
counter(); // imprime 3

const anotherCounter = createCounter();
anotherCounter(); // imprime 1, pois anotherCounter é um novo closure com sua própria variável count
counter(); // imprime 4, pois counter continua a acessar a variável count do primeiro closure criado por createCounter

// 11 - recursão
const untilTen = (n,m) => {
   if (n > 10) { 
 console.log("Número maior que 10, encerrando recursão.");
} else {
    console.log(n);
    untilTen(n + m, m); // chama a função novamente com n incrementado por m
}
}
untilTen(1, 2); // inicia a recursão com n = 1 e m = 2

function factorial(n) {
    if (n === 0) { // caso base: o fatorial de 0 é 1
        return 1;
    }
    return n * factorial(n - 1); // chamada recursiva: n! = n * (n - 1)!
}
console.log(factorial(5)); // retorna 120, pois 5! = 5 * 4 * 3 * 2 * 1 = 120
console.log(factorial(0)); // retorna 1, pois 0! = 1



    