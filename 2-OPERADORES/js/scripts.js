// 1 - number
console.log(typeof 2);
console.log(typeof 5.14);
console.log(typeof -127);

// 2 - ops.aritimeticas
console.log(2 + 3);
console.log(5 - 2);
console.log(3 * 4);
console.log(10 / 2);
console.log(10 % 3);

console.log(2 + 3 * 4); // ordem de precedencia
console.log((2 + 3) * 4); // ordem de precedencia

// 3 - special numbers
console.log(typeof Infinity);
console.log(typeof -Infinity);
console.log(typeof NaN);
console.log(1 / 0); // Infinity
console.log(-1 / 0); // -Infinity
console.log(12* "asd"); // NaN

// 4 - string
console.log("um texto");
console.log(`mais um texto`);
console.log("13");

console.log(typeof "Hello");
console.log(typeof 'World');
console.log(typeof `Template Literal`);

//5-simbolo especiais em string
console.log("Testando\n quebra de linha");
console.log("Testando\t tabulação");
console.log("Testando \"aspas\" dentro de string");
console.log('Testando \'aspas\' dentro de string');
console.log("Testando \\ barra invertida");

//6 - string concatenada
console.log("Olá, " + "mundo!");
console.log("O resultado é: " + (2 + 3));
console.log("O valor de pi é aproximadamente: " + 3.14);

//7 - template string
const nome = "Alice";
const idade = 30;
console.log(`Olá, meu nome é ${nome} e tenho ${idade} anos.`);

//8 - boolean
console.log(typeof true);
console.log(typeof false);
console.log(true);
console.log(false);

//9 - comparação
console.log(5 > 3); // true
console.log(2 < 1); // false
console.log(4 >= 4); // true
console.log(6 <= 5); // false
console.log(3 === 3); // true
console.log(3 !== 4); // true

//10 comparação de idênticos
console.log(5 == "5"); // true (comparação de valor)
console.log(5 === "5"); // false (comparação de valor e tipo)
console.log(null == undefined); // true (comparação de valor)
console.log(null === undefined); // false (comparação de valor e tipo)
console.log(9 +"9"); // "99" (comparação de valor)
console.log(9 === "9"); // false (comparação de valor e tipo)
console.log(9 !== "9"); // true (comparação de valor e tipo)
console.log(9 !="9")// true (comparação de valor)

//11 - operador lógico
console.log(true && false); // false  AND
console.log(true || false); // true OR
console.log(!true); // false NOT
console.log(!false); // true

