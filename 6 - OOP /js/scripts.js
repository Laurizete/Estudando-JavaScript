
// 1 - métodos
const animal = {
    nome: "Bob",
    latir: function() {
        console.log("Au au!");
    }
};
console.log(animal.nome);
animal.latir();

// 2 - aprofundando métodos

const pessoa = {
    nome: "Lore",

getNome: function() {
    return this.nome;
    },
setNome: function(novoNome) {
    this.nome = novoNome;
   },
};
console.log(pessoa.nome);
console.log(pessoa.getNome());
pessoa.setNome('Maria');
console.log(pessoa.getNome());

// 3 - prototypes
 const texto = "Olá, mundo!";

 console.log (Object.getPrototypeOf(texto));
 const booleano = true;
 console.log(Object.getPrototypeOf(booleano));
 const arr = [];
 console .log(arr.length);
 console.log(Object.getPrototypeOf(arr));

 // 4 - mais sobre prototypes
 function pessoa(nome) {
    this.nome = nome;
 }
 pessoa.prototype.getNome = function() {
    return this.nome;
 };
 const pessoa1 = new pessoa("Alice");
 console.log(pessoa1.getNome());
 const pessoa2 = new pessoa("Bob");
 console.log(pessoa2.getNome());
   
 


