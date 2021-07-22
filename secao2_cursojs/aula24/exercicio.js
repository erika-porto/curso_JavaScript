/*exercicio de variaveis */

let varA='A'; //apontando para B
let varB='B'; //apontando para C
let varC='C'; //apontando para A

let aux=varA; //recebendo o valor a, essa auxiliar vai ajudar a guardar o valor de a para que nao se perca

varA=varB;
varB=varC;
varC=aux;

console.log(varA,varB,varC);

//todo-solução mais moderna do js 

// [varA,varB,varC]=[varB,varC,varA];
// console.log(varA,varB,varC);