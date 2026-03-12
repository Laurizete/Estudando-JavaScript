// 1 -variáveis
let nome = "João";
console.log(nome);
nome = "João Silva";
console.log(nome);

const idade = 30;
console.log(idade);

console.log(typeof nome);
console.log(typeof idade);

//2 - mais variáveis
//let 2teste="invalido"
//let teste-2="invalido"

let a = 10;
let b = 20;
let c = 30;
console.log(a,b,c);
const nomeCompleto = "Maria Silva";
const cidade = "São Paulo";
console.log(nomeCompleto, cidade);

//3-prompt

//const nomeUsuario = prompt("Digite seu nome:");//informação do usuário na tela esgata mensagem para o usuário digitar o nome e armazena na variável
//  nomeUsuario
//console.log("Olá, " + nomeUsuario + "! Bem-vindo ao JavaScript!");

// 4 -alert

//alert("Bem-vindo ao JavaScript, " + nomeUsuario + "!");
 //const nomeUsuario2 = prompt("Digite seu nome novamente:");
 //alert("Olá, " + nomeUsuario2 + "! Seja bem-vindo novamente!");

 //5 - Math
  console.log(Math.max(5, 10, 15)); // Retorna o maior número
  console.log(Math.min(5, 10, 15)); // Retorna o menor número
  console.log(Math.round(4.7)); // Arredonda para o inteiro mais próximo
  console.log(Math.floor(4.7)); // Arredonda para baixo
  console.log(Math.ceil(4.3)); // Arredonda para cima
  console.log(Math.random()); // Retorna um número aleatório entre 0 e 1
  console.log(Math.random() * 100); // Retorna um número aleatório entre 0 e 100

  //6 - console
    console.log("Este é um log de informação.");
    console.error("Este é um log de erro.");
    console.warn("Este é um log de aviso.");
    console.info("Este é um log de informação detalhada.");
    console.debug("Este é um log de depuração.");   

// 7 - if
    const numero = 10;
    if (numero > 5) {
      console.log("O número é positivo.");
    }
     const user = "João";
    if (user === "João") {
         console.log("Olá João, seja bem-vindo!");
     }
    if (user === "Maria") {
        console.log("Olá Maria, seja bem-vinda!");
}
console.log(user === "João"); // true
console.log(user === "Maria"); // false
    

