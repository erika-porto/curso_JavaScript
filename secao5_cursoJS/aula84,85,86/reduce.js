//REDUCE-reduzir o array em um unico elemento

//ex1-somando todos os elementos do array
// const numeros=[5,10,15,20];
// const total=numeros.reduce(function(acumulador,valor,indice,array){
//     acumulador+=valor;
//     return acumulador;
// });
// console.log(total);

//ex2-retorne um array com pares(filter)

// const numeros=[5,10,15,20];
// const pares=numeros.filter(function(valor,indice,array){
//     if(valor % 2 === 0)
//         return valor;
// },[]);

// console.log(pares);

//ex3-retorne um array com o dobro dos valores
// const numeros=[5,10,15,20];
// const dobro=numeros.map(function(valor){
//     return valor*2;
// });

// console.log(dobro);

//ex4-somando somente os numeros pares do array , usando reduce
// const numeros=[5,10,15,20];
// const somaPares=numeros.reduce(function(acumulador,valor){
//     if(valor % 2 === 0){
//         acumulador+=valor;
//     }
//     return acumulador;
// },0)//se eu nao colocar que inicie em 0 ele soma o 5
// console.log(somaPares);

//ex5-retorne a pessoa mais velha
const pessoas = [
    { nome: 'luiz', idade: 62 },
    { nome: 'eduardo', idade: 45 },
    { nome: 'camila', idade: 70 },
    { nome: 'fernando', idade: 82 },
    { nome: 'serena', idade: 61 },
];

const maisVelho = pessoas.reduce(function (acumulador, valor) {//o acumulador seria o primeiro objeto o luis e idade62, o valor o restante ,e assim vai comparando o primeiro com cada objeto 
    // console.log(acumulador,valor);
    if (acumulador.idade > valor.idade) return acumulador;
    return valor;
})
console.log(maisVelho);