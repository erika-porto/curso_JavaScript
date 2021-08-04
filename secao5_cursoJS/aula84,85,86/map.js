//Map -cada exemplo comentado , só ir descomentando.

//ex1-dobre os números
// const numeros=[5,50,80,1,2];
// const numerosEmDobro=numeros.map(function(valor){
//     return valor*2;
// });
// console.log(numerosEmDobro);

//ex2-retonando o indice 
// const numeros=[5,50,80,1,2];
// const numerosEmDobro=numeros.map(function(valor,indice){
//     return indice;
// });
// console.log(numerosEmDobro);

//ex-3- trabalhando com onjetos

const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Eduardo', idade: 42 },
    { nome: 'Fabio', idade: 35 },
    { nome: 'Olivia', idade: 78 }
];

//retorne apenas uma string com o nome da pessoa
const nomes = pessoas.map(obj => obj.nome);

console.log(nomes);

//remova apenas a chave nome do objeto

//maneira um
// const idade=pessoas.map( obj => {
//     return {idade:obj.idade};
// });
// console.log(idade);

//maneira dois-deletando a chave nome do objeto
const idades = pessoas.map(function (obj) {
    delete obj.nome;
    return obj;
});

console.log(idades);

//ex4-adicione uma chave de id para cada objeto-usando o indice como id
// const comIds= pessoas.map(function(obj,indices){
//     obj.id=indices;
//     return obj;
// });
// console.log(comIds);