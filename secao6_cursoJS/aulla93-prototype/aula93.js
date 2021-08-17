//! Prototype
//todo-Todos os objetos tem uma referência interna para um protótipo que vem da função construtora, ele serve para que os métodos do objeto fiquem ali , para não quebrar a perfomance da aplicação. * ele primeiro busca dentro do objeto e depois ele busca no prototype

//Constructor function
function Pessoa(nome,sobrenome){
    this.nome=nome;
    this.sobrenome=sobrenome;
}

//instancia 
const pessoa1=new Pessoa('Luis','da Silva');
const pessoa2=new Pessoa('Maria','Oliveira');

//colocando o metodo nomeCompleto dentro do proto

Pessoa.prototype.nomeCompleto = function () {
    return this.nome + ' ' + this.sobrenome;
};

console.dir(pessoa1);
console.dir(pessoa2);