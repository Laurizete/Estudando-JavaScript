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