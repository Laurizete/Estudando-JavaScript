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

//4 metodos dos arrays

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

// 5 - objetos

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

// 6 - mais sobre objetos criando e deletando propriedades

const carro = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2020,
    cor: "prata"
};

console.log(carro);

carro.ano = 2021; // - modificando a propriedade ano do objeto carro

console.log(carro);

carro["cor"] = "preto"; // - modificando a propriedade cor do objeto carro usando a notação de colchetes

console.log(carro);

carro.preco = 50000; // - adicionando uma nova propriedade preco ao objeto carro

console.log(carro);

delete carro.modelo; // - deletando a propriedade modelo do objeto carro

console.log(carro);

delete carro["marca"]; // - deletando a propriedade marca do objeto carro usando a notação de colchetes

console.log(carro);

// 7 - mais sobre objetos 
const pessoa2 = {
    nome: "Maria",
    idade: 25,
    cidade: "Rio de Janeiro",
    saudacao: function() { // - adicionando um método saudacao ao objeto pessoa2
        return `Olá, meu nome é ${this.nome} e eu tenho ${this.idade} anos.`; // - usando a palavra-chave this para acessar as propriedades do objeto dentro do método
    }
};

console.log(pessoa2);

console.log(pessoa2.saudacao()); // - chamando o método saudacao do objeto pessoa2  

const obj = {
    prop1: "valor1",
    prop2: "valor2",
};

console.log(obj) instanceof Object; // - verificando se obj é uma instância de Object, retorna true


 const obj2 = {
    prop3: [],
 }
Object.assign(obj2, obj); // - usando Object.assign para copiar as propriedades de obj para a propriedade prop3 do objeto obj2

console.log(obj2);

// 8 - conhecendo melhor os objetos
console.log(Object.keys(obj)); // - Object.keys é um método dos objetos que retorna um array com as chaves do objeto

console.log(Object.values(obj)); // - Object.values é um método dos objetos que retorna um array com os valores do objeto

console.log(Object.entries(obj)); // - Object.entries é um método dos objetos que retorna um array com os pares chave-valor do objeto

//  - objetos e arrays

const pessoa3 = {
    nome: "Carlos",
    idade: 40,
    cidade: "Belo Horizonte",
    hobbies: ["futebol", "música", "viagens"] // - adicionando uma propriedade hobbies que é um array
};

console.log(pessoa3);

console.log(pessoa3.hobbies); // - acessando a propriedade hobbies do objeto pessoa3, retorna o array de hobbies

console.log(pessoa3.hobbies[0]); // - acessando o primeiro elemento do array de hobbies do objeto pessoa3, retorna "futebol"

console.log(pessoa3.hobbies[1]); // - acessando o segundo elemento do array de hobbies do objeto pessoa3, retorna "música"

console.log(pessoa3.hobbies[2]); // - acessando o terceiro elemento do array de hobbies do objeto pessoa3, retorna "viagens"

// 9 - mutação 

const a = {
    nome: "Lore",
};
const b = a; 
console.log(a); // - b é uma referência ao mesmo objeto que a, então ambos apontam para o mesmo objeto na memória
console.log(b); // - a é uma referência ao objeto pessoa4, então ambos apontam para o mesmo objeto na memória

console.log(a === b); // - a e b são referências ao mesmo objeto, então a comparação retorna true

a.age = 25; // - modificando a propriedade age do objeto pessoa4 através da referência a
 console.log(a); // - a agora tem a propriedade age, pois a e b apontam para o mesmo objeto
 console.log(b); // - b também tem a propriedade age, pois a e b apontam para o mesmo objeto

 delete b .age; // - deletando a propriedade age do objeto pessoa4 através da referência b
 console.log(a); // - a não tem mais a propriedade age, pois a e b apontam para o mesmo objeto
 console.log(b); // - b não tem mais a propriedade age, pois a e b apontam para o mesmo objeto

 // 10 - loop em arrays 
const numeros3 = [1, 2, 3, 4, 5];

for (let i = 0; i < numeros3.length; i++) { // - usando um loop for para iterar sobre os elementos do array numeros3
    console.log(numeros3[i]); // - acessando cada elemento do array usando o índice i
}

const frutas3 = ['banana', 'maçã', 'laranja'];

for (let i = 0; i < frutas3.length; i++) { // - usando um loop for para iterar sobre os elementos do array frutas3
    console.log(`Listando as frutas: ${frutas3[i]}`); // - acessando cada elemento do array usando o índice i
}

// 11 - push e pop

const numeros4 = [1, 2, 3];

numeros4.push(4); // - push é um método dos arrays que adiciona um elemento ao final do array

console.log(numeros4);

numeros4.push(5, 6); // - push pode adicionar múltiplos elementos ao final do array

console.log(numeros4);

numeros4.pop(); // - pop é um método dos arrays que remove o último elemento do array e retorna esse elemento

console.log(numeros4);

const itemRemovido = numeros4.pop(); // - pop retorna o elemento removido, que pode ser armazenado em uma variável

console.log(itemRemovido); // - exibindo o elemento removido

console.log(numeros4); // - exibindo o array após a remoção do elemento 

// 12 - shift e unshift

const numeros5 = [1, 2, 3];

numeros5.unshift(0); // - unshift é um método dos arrays que adiciona um elemento no início do array

console.log(numeros5);

numeros5.unshift(-2, -1); // - unshift pode adicionar múltiplos elementos no início do array

console.log(numeros5);

numeros5.shift(); // - shift é um método dos arrays que remove o primeiro elemento do array e retorna esse elemento

console.log(numeros5);

const itemRemovidoShift = numeros5.shift(); // - shift retorna o elemento removido, que pode ser armazenado em uma variável

console.log(itemRemovidoShift); // - exibindo o elemento removido

console.log(numeros5); // - exibindo o array após a remoção do elemento

// 13 - indexOf e lastIndexOf

const frutas4 = ['banana', 'maçã', 'laranja', 'maçã'];

console.log(frutas4.indexOf('maçã')); // - indexOf é um método dos arrays que retorna o índice da primeira ocorrência de um elemento no array

console.log(frutas4.lastIndexOf('maçã')); // - lastIndexOf é um método dos arrays que retorna o índice da última ocorrência de um elemento no array

console.log(frutas4.indexOf('uva')); // - se o elemento não for encontrado no array, indexOf retorna -1

console.log(frutas4.lastIndexOf('uva')); // - se o elemento não for encontrado no array, lastIndexOf retorna -1

// 14 - slice 
 const testeSlice = ["a", "b", "c", "d", "e", "f", "g"];

const subArray = testeSlice.slice(1, 4); // - slice é um método dos arrays que retorna uma cópia de uma parte do array, especificada pelos índices de início e fim

console.log(subArray); // - exibindo o subarray retornado por slice

console.log(testeSlice); // - o array original permanece inalterado após o uso de slice

const subArray2 = testeSlice.slice(3); // - se o índice de fim for omitido, slice retorna todos os elementos a partir do índice de início até o final do array

console.log(subArray2); // - exibindo o subarray retornado por slice com índice de fim omitido

const subArray3 = testeSlice.slice(-3); // - se o índice de início for negativo, slice conta a partir do final do array

console.log(subArray3); // - exibindo o subarray retornado por slice com índice de início negativo

const subArray4 = testeSlice.slice(-5, -2); // - slice também pode usar índices negativos para especificar o início e o fim do subarray

console.log(subArray4); // - exibindo o subarray retornado por slice com índices negativos para início e fim

// 15 - forEach

const numeros6 = [1, 2, 3, 4, 5];

numeros6.forEach(function(numero) { // - forEach é um método dos arrays que executa uma função para cada elemento do array
    console.log(numero); // - exibindo cada elemento do array usando a função passada para forEach
});

const frutas5 = ['banana', 'maçã', 'laranja'];

frutas5.forEach(function(fruta, indice) { // - a função passada para forEach pode receber o elemento e o índice como parâmetros
    console.log(`Fruta: ${fruta}, Índice: ${indice}`); // - exibindo cada fruta e seu índice usando a função passada para forEach
});

const posts = [
    { id: 1, title: "Post 1" },
    { id: 2, title: "Post 2" },
    { id: 3, title: "Post 3" },
];

posts.forEach(function(post) { // - usando forEach para iterar sobre um array de objetos
    console.log(`ID: ${post.id}, Title: ${post.title}`); // - exibindo as propriedades de cada objeto usando a função passada para forEach
});
const posts2 = [
    { titles: "Primeiro Post", category: " PHP" },
    { titles: "Segundo Post",category: " JavaScript" },
];
posts2.forEach(function(post) { // - usando forEach para iterar sobre um array de objetos
    console.log(`Exibir post: ${post.titles}, da categoria : ${post.category}`); // - exibindo as propriedades de cada objeto usando a função passada para forEach
});

// 16 - includes

const brands = ["BMW", "Audi", "Mercedes"];

console.log(brands.includes("BMW")); // - includes é um método dos arrays que verifica se um elemento está presente no array, retorna true ou false
console.log(brands.includes("Tesla")); // - se o elemento não estiver presente no array, includes retorna false

if (brands.includes("Audi")) { // - usando includes em uma estrutura condicional para verificar a presença de um elemento no array
    console.log("A marca Audi está presente no array."); // - se Audi estiver presente, exibe esta mensagem
} else {
    console.log("A marca Audi não está presente no array."); // - se Audi não estiver presente, exibe esta mensagem
}

const numbers = [1, 2, 3, 4, 5];

console.log(numbers.includes(3)); // - includes verifica se o número 3 está presente no array numbers, retorna true

console.log(numbers.includes(6)); // - includes verifica se o número 6 está presente no array numbers, retorna false

const fruits = ['banana', 'maçã', 'laranja'];

console.log(fruits.includes('maçã')); // - includes verifica se a string 'maçã' está presente no array fruits, retorna true

console.log(fruits.includes('uva')); // - includes verifica se a string 'uva' está presente no array fruits, retorna false

// 17 - reverse

const numbers2 = [1, 2, 3, 4, 5];

numbers2.reverse(); // - reverse é um método dos arrays que inverte a ordem dos elementos do array

console.log(numbers2); // - exibindo o array após a inversão dos elementos

//METODOS DE STRINGS

// 18 - trim

const text = "   Olá, mundo!   ";

console.log(text.trim()); // - trim é um método das strings que remove os espaços em branco do início e do fim da string

console.log(text); // - a string original permanece inalterada após o uso de trim

const text2 = "   JavaScript é incrível!   ";

console.log(text2.trim()); // - trim remove os espaços em branco do início e do fim da string

console.log(text2); // - a string original permanece inalterada após o uso de trim

// 19 - padStart 
const number = "5";

console.log(number.padStart(3, "0")); // - padStart é um método das strings que adiciona caracteres no início da string até atingir o comprimento especificado

console.log(number); // - a string original permanece inalterada após o uso de padStart

const text3 = "Hello";

console.log(text3.padStart(10, "*")); // - padStart adiciona asteriscos no início da string até atingir o comprimento de 10 caracteres

console.log(text3); // - a string original permanece inalterada após o uso de padStart

//19.1 - padEnd
const number2 = "5";
console.log(number2.padEnd(3, "0")); // - padEnd é um método das strings que adiciona caracteres no final da string até atingir o comprimento especificado

console.log(number2); // - a string original permanece inalterada após o uso de padEnd

const text4 = "Hello";

console.log(text4.padEnd(10, "*")); // - padEnd adiciona asteriscos no final da string até atingir o comprimento de 10 caracteres

console.log(text4); // - a string original permanece inalterada após o uso de padEnd

// 20 - split

const sentence = "Olá, mundo! Bem-vindo ao JavaScript.";

const words = sentence.split(" "); // - split é um método das strings que divide a string em um array de substrings com base em um separador especificado

console.log(words); // - exibindo o array de palavras resultante do split

// 21 - join

const words2 = ["Olá", "mundo", "JavaScript"];

const sentence2 = words2.join(" "); // - join é um método dos arrays que junta os elementos do array em uma string, usando um separador especificado

console.log(sentence2); // - exibindo a string resultante do join

const itens2 = ["banana", "maçã", "laranja"];

const sentence3 = `precisamos comprar: ${itens2.join(", ")}`; // - usando join para criar uma string a partir de um array de itens, separando os itens por vírgula e espaço
console.log(sentence3); // - exibindo a string resultante do join

// 22 - repeat

const text5 = "Olá! ";

console.log(text5.repeat(3)); // - repeat é um método das strings que repete a string um número especificado de vezes

console.log(text5); // - a string original permanece inalterada após o uso de repeat

const text6 = "JavaScript é divertido! ";

console.log(text6.repeat(2)); // - repeat repete a string "JavaScript é divertido! " duas vezes

console.log(text6); // - a string original permanece inalterada após o uso de repeat

// 23 - rest operator

const somaInfinita = (...args) => { // - o rest operator (...) permite que uma função aceite um número indefinido de argumentos como um array
    let total = 0;
    for (let i = 0; i < args.length; i++) {
        total += args[i]; // - somando cada argumento passado para a função
    }
    return total; // - retornando o total da soma dos argumentos
};

console.log(somaInfinita(1, 2, 3));// - usando a função somaInfinita com três argumentos, o rest operator permite que a função lide com isso sem problemas
console.log(somaInfinita(14, 57, 26, 87)); // - usando a função somaInfinita com diferentes números de argumentos, o rest operator permite que a função lide com isso sem problemas

// 24 - for...of

const somaInfinita2 = (...args) => { // - usando o rest operator para aceitar um número indefinido de argumentos
    let total = 0;
    for (const num of args) { // - for...of é uma estrutura de loop que itera sobre os elementos de um array ou outros objetos iteráveis
        total += num; // - somando cada número iterado
    }
    return total; // - retornando o total da soma dos argumentos
};

console.log(somaInfinita2(1, 2, 3)); // - usando a função somaInfinita2 com três argumentos, o rest operator e o for...of permitem que a função lide com isso sem problemas
console.log(somaInfinita2(14, 57, 26, 87)); // - usando a função somaInfinita2 com diferentes números de argumentos, o rest operator e o for...of permitem que a função lide com isso sem problemas

// 24.1 - for...in

const pessoa4 = {
    nome: "Ana",
    idade: 28,
    cidade: "Curitiba"
};

for (const chave in pessoa4) { // - for...in é uma estrutura de loop que itera sobre as chaves de um objeto
    console.log(`${chave}: ${pessoa4[chave]}`); // - exibindo cada chave e seu valor correspondente usando a notação de colchetes
}

// 25 - destructuring em objetos

const pessoa5 = {
    nome: "Lucas",
    idade: 35,
    cidade: "Porto Alegre"
};

const { nome, idade, cidade } = pessoa5; // - destructuring é uma sintaxe que permite extrair valores de objetos ou arrays e atribuí-los a variáveis

console.log(nome, idade, cidade); // - exibindo a variável nome extraída do objeto pessoa5

// 25.1 renomear as variáveis durante o destructuring

const { nome: nomePessoa, idade: idadePessoa, cidade: cidadePessoa } = pessoa5; // - durante o destructuring, é possível renomear as variáveis para evitar conflitos ou para dar nomes mais significativos

console.log(nomePessoa); // - exibindo a variável nomePessoa extraída do objeto pessoa5

console.log(idadePessoa); // - exibindo a variável idadePessoa extraída do objeto pessoa5

console.log(cidadePessoa); // - exibindo a variável cidadePessoa extraída do objeto pessoa5 

// 26 - destructuring em arrays

const numeros7 = ["aviao", "submarino", "carro"];

const [primeiro, segundo, terceiro] = numeros7; // - destructuring também pode ser usado em arrays para extrair valores com base na posição dos elementos

console.log(primeiro,segundo,terceiro); // - exibindo a variável primeiro extraída do array numeros7

// 26.1 - ignorando elementos durante o destructuring em arrays

const [primeiro2, , terceiro2] = numeros7; // - durante o destructuring em arrays, é possível ignorar elementos usando vírgulas para pular posições

console.log(primeiro2); // - exibindo a variável primeiro2 extraída do array numeros7

console.log(terceiro2); // - exibindo a variável terceiro2 extraída do array numeros7


// 27 - json

const myJson = {
    nome: "Mariana",
    idade: 32,
    cidade: "Recife"
};

const pessoaJson = JSON.stringify(myJson); // - JSON.stringify é um método que converte um objeto JavaScript em uma string JSON

console.log(pessoaJson); // - exibindo a string JSON resultante da conversão do objeto myJson   

const pessoaObjeto = JSON.parse(pessoaJson); // - JSON.parse é um método que converte uma string JSON de volta para um objeto JavaScript

console.log(pessoaObjeto); // - exibindo o objeto resultante da conversão da string JSON de volta para um objeto

// 28 - json para objeto  e objeto para json

const jsonString = '{"nome": "Ricardo", "idade": 45, "cidade": "Salvador"}';

const pessoaFromJson = JSON.parse(jsonString); // - convertendo a string JSON para um objeto JavaScript usando JSON.parse

console.log(pessoaFromJson); // - exibindo o objeto resultante da conversão da string JSON

const pessoaToJson = JSON.stringify(pessoaFromJson); // - convertendo o objeto de volta para uma string JSON usando JSON.stringify

console.log(pessoaToJson); // - exibindo a string JSON resultante da conversão do objeto de volta para JSON

// json invalido

const invalidJsonString = '{"nome": "Ricardo", "idade": 45, "cidade": "Salvador"'; // - esta string JSON é inválida porque falta a chave de fechamento }

try {
    const pessoaInvalid = JSON.parse(invalidJsonString); // - tentando converter a string JSON inválida para um objeto JavaScript usando JSON.parse
} catch (error) {
    console.error("Erro ao parsear JSON:", error); // - capturando e exibindo o erro que ocorre ao tentar parsear a string JSON inválida

}
myObject.isOpenToWork = true; // - adicionando uma nova propriedade isOpenToWork ao objeto myObject e atribuindo o valor true

console.log(myObject); // - exibindo o objeto myObject após a adição da nova propriedade isOpenToWork   
const myNewJson = JSON.stringify(myObject); // - convertendo o objeto myObject atualizado para uma string JSON usando JSON.stringify

console.log(myNewJson); // - exibindo a string JSON resultante da conversão do objeto myObject atualizado
console.log(typeof myNewJson); // - verificando o tipo da variável myNewJson, que deve ser string, pois é o resultado da conversão do objeto para JSON

