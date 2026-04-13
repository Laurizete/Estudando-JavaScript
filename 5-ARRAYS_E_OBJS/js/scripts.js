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
