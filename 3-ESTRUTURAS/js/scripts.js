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

// 8 - else
const idadeUsuario = 15;
if (idadeUsuario >= 18) {
  console.log("Você é maior de idade.");
} else {
  console.log("Você é menor de idade.");
}

const diaSemana = "sábado";
if (diaSemana === "sábado" || diaSemana === "domingo") {
  console.log("É fim de semana!");
} else {
  console.log("É dia de semana.");
}

// 9 - else if
const hora = 14;
if (hora < 12) {
  console.log("Bom dia!");
} else if (hora < 18) {
  console.log("Boa tarde!");
} else {
  console.log("Boa noite!");
}

const nota = 85;
if (nota >= 90) {
  console.log("Excelente!");
} else if (nota >= 70) {
  console.log("Bom trabalho!");
} else if (nota >= 50) {
  console.log("Você passou, mas pode melhorar.");
} else {
  console.log("Infelizmente, você não passou.");
}

// 10 - while
let p = 0;
while (p < 5) {
  console.log(`repetindo ${p}`)
  p = p + 1;
}

// loop infinito
// while (true) {
//   console.log("Este loop nunca termina!");
// }
 
let x = 10;
while (x > 5) {
  console.log(`Imprimindo ${x}`);
x--; // diminui o valor de x em 1 a cada repetição
}

// 11 - do while
let o = 10;
do {
  console.log(`Valor de o: ${o}`);
  o++;
} while (o < 5);

let z = 10;
do {
  console.log(`Valor de z: ${z}`);
  z--;
} while (z > 5);

//12 - for

for (let i = 0; i < 5; i++)  // t ++ é o mesmo que i = i + 1 encrementador 
  console.log(`Contagem: ${i}`);//

const frutas = ["maçã", "banana", "laranja"];
for (let j = 0; j < frutas.length; j++) {
  console.log(`Fruta: ${frutas[j]}`);
}

//indentação
for (let k = 0; k < 5; k++) {
  if( k * 2 > 5) {  
    console.log (`Maior que 10! ${k}`)
  } else {
    if(k * 2 === 10) {
      console.log(`Igual a 10: ${k}`)
    }
  }
}
//14 break
for (let m = 0; m < 10; m++) {
  if (m === 5) {
    break; // Interrompe o loop quando m é igual a 5
  }
  console.log(`Valor de m: ${m}`);
}

// 15 continue

for (let n = 0; n < 10; n++) {
  //operador de resto = % verifica se n é par ou impar, se o resultado for 0, n é par
  if (n % 2 === 0) {
    console.log("numero é par!");
    continue; // Pula a iteração atual se n for par
  }
  console.log(`Valor de n: ${n}`);
} 

// 16 - switch
const dia = "terça-feira";
switch (dia) {
  case "segunda-feira":
    console.log("Hoje é segunda-feira.");
    break;
  case "terça-feira":
    console.log("Hoje é terça-feira.");
    break;
  case "quarta-feira":
    console.log("Hoje é quarta-feira.");
    break;
  case "quinta-feira":
    console.log("Hoje é quinta-feira.");
    break;
  case "sexta-feira":
    console.log("Hoje é sexta-feira.");
    break;
  default: // caso nenhum dos casos anteriores seja verdadeiro
    console.log("Hoje é fim de semana!");
}
//switvh errado
const cor = "vermelho";
switch (cor) {
  case "azul":
    console.log("A cor é azul.");
    break;
  case "verde":
    console.log("A cor é verde.");
    break;
  case "amarelo":
    console.log("A cor é amarelo.");
    break;
  default:
    console.log("Cor desconhecida.");
}