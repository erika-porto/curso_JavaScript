//Filter-Sempre retornar um array, com a mesma quantidade de elementos ou menor , dependendo das condições
 
//ex1-codigo maior

//const numeros=[5,50,80,1,2,3,5,8,7,11,15,22,27];
 //function callBackFilter(valor,indice,array){
//     if(valor > 10){
//         return true;
//     }else{
//         return false;
//     }
// }

// const maiorDez=numeros.filter(callBackFilter);
// console.log(maiorDez); 

//ex2-diminuindo o codigo
// const numeros=[5,50,80,1,2,3,5,8,7,11,15,22,27];
// function callBackFilter(valor){
//     return valor > 10;
// }

// const maiorDez=numeros.filter(callBackFilter);
// console.log(maiorDez);

//ex3-usando funcao anonima dentro do metodo filter
// const numeros=[5,50,80,1,2,3,5,8,7,11,15,22,27];
// const maiorDez=numeros.filter(function(valor){
//     return valor > 10;
// });
// console.log(maiorDez);

//ex4-usando arrow function
// const numeros=[5,50,80,1,2,3,5,8,7,11,15,22,27];
//com uma linha apenas remova o return 
// const maiorDez=numeros.filter( valor => valor > 10);

// console.log(maiorDez);

//ex5-array com objetos
const pessoas=[
    {nome:'Luiz',idade:62},
    {nome:'Estela',idade:65},
    {nome:'Wallace',idade:34},
    {nome:'Stefano',idade:40},
    {nome:'Eduardo',idade:25},
];

//retorne as pessoas com nome com 5 letras ou mais 
// const pessoasNomeGrande=pessoas.filter( obj =>{
//     return obj.nome.length > 5;
// });

// console.log(pessoasNomeGrande);

//retorne as pessoas com mais de 50 anos 
// const pessoasMaisCinquenta=pessoas.filter(valor =>{
//     return valor.idade > 50;
// })
// console.log(pessoasMaisCinquenta);

//nomes que terminam com a letra a
const nomeTerminaA=pessoas.filter( obj =>{
    return obj.nome.toLowerCase().endsWith('a');//usando duas funcoes ao mesmo tempo , deixando a letra minuscula e terminando com a 
});
console.log(nomeTerminaA);