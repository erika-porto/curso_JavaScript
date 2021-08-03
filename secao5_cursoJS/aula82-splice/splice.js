//metodo splice(), faz a funcao de pop, unshift 

const nomes=['erika','fabio','maria','otavio'];

//ex1-simulando o pop
// const removidos=nomes.splice(-1,1)//removendo o ultimo elemento

//ex2-simulando o shift
// const removidos=nomes.splice(0,1);//removendo o primeiro elemento
// console.log(nomes,removidos);

//ex3-adicionando elementos no inicio do array
// nomes.splice(0,0,'mario','luiz');
// console.log(nomes);

//ex4-adicionando elementos no fim do array
nomes.splice(nomes.length,0,'duda','joana');
console.log(nomes);