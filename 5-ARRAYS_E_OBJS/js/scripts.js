// 1 - arrays
const lista = [1, 2, 3, 4, 5];

console.log(lista);

console.log (typeof lista);
const itens = ['banana', true, 2,4.5, []]; // - arrays podem conter diferentes tipos de dados

console.log(itens);

// 2 -mais sobre arrays

const frutas = ['banana', 'maçã', 'laranja'];
console.log(frutas[0]); // - acessando o primeiro elemento do array

console.log(frutas[1]); // - acessando o segundo elemento do array

console.log(frutas[2]); // - acessando o terceiro elemento do array

console.log(frutas[3]); // - acessando um elemento que não existe no array, retorna undefined

// 3 - propriedades  dos arrays

const numeros = [1, 2, 3, 4, 5];

console.log(numeros.length); // - length é uma propriedade dos arrays que retorna o número de elementos presentes no array

console.log(numeros["length"]); // - length é uma propriedade dos arrays que retorna o número de elementos presentes no array

const myName = "João";

console.log(myName.length); // - length é uma propriedade das strings que retorna o número de caracteres presentes na string

console.log(myName["length"]); // - length é uma propriedade das strings que retorna o número de caracteres presentes na string

// metodos dos arrays

const numeros2 = [1, 2, 3, 4, 5];

const otherNumeros = [6, 7, 8, 9, 10];

const numeros2Push = numeros2.concat(otherNumeros); // - concat é um método dos arrays que concatena dois ou mais arrays e retorna um novo array

console.log(numeros2Push);

const numeros2String = numeros2.toString(); // - toString é um método dos arrays que converte o array em uma string

console.log(numeros2String);

const numeros2Join = numeros2.join(" - "); // - join é um método dos arrays que converte o array em uma string, mas permite especificar um separador entre os elementos

console.log(numeros2Join);

const frutas2 = ['banana', 'maçã', 'laranja'];

const frutas2String = frutas2.toString(); // - toString é um método dos arrays que converte o array em uma string

console.log(frutas2String);

const frutas2Join = frutas2.join(" - "); // - join é um método dos arrays que converte o array em uma string, mas permite especificar um separador entre os elementos

console.log(frutas2Join);

const texto = "Olá, mundo!";
console.log(texto.toUpperCase()); // - toUpperCase é um método das strings que converte todos os caracteres da string para maiúsculas

console.log(texto.toLowerCase()); // - toLowerCase é um método das strings que converte todos os caracteres da string para minúsculas

console.log(texto.indexOf("g ")); // - indexOf é um método das strings que retorna o índice da primeira ocorrência de uma substring especificada

// 4 - objetos

const pessoa = {
    nome: "João",
    idade: 30,
    cidade: "São Paulo"
};

console.log(pessoa);

console.log(typeof pessoa); // - typeof retorna o tipo do dado, no caso, objeto

console.log(pessoa.nome); // - acessando a propriedade nome do objeto pessoa

console.log(pessoa.idade); // - acessando a propriedade idade do objeto pessoa

console.log(pessoa.cidade); // - acessando a propriedade cidade do objeto pessoa

console.log(pessoa["nome"]); // - acessando a propriedade nome do objeto pessoa usando a notação de colchetes

console.log(pessoa["idade"]); // - acessando a propriedade idade do objeto pessoa usando a notação de colchetes

console.log(pessoa["cidade"]); // - acessando a propriedade cidade do objeto pessoa usando a notação de colchetes

console.log(pessoa.email); // - acessando uma propriedade que não existe no objeto, retorna undefined

console.log(pessoa["email"]); // - acessando uma propriedade que não existe no objeto usando a notação de colchetes, retorna undefined

console.log(pessoa.nome.length); // - acessando a propriedade nome do objeto pessoa e depois acessando a propriedade length da string nome, retorna o número de caracteres da string nome

console.log(pessoa["nome"].length); // - acessando a propriedade nome do objeto pessoa usando a notação de colchetes e depois acessando a propriedade length da string nome, retorna o número de caracteres da string nome

