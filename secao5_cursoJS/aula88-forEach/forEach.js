//FOREACH-iterar o array

//todo1-usando o for classico
// const a1=[1,2,3,4,5,6,7,8,9];
// for(let valor of a1){
//     console.log(valor);
// }

//todo2-usando o forEach
// const a1=[10,20,30,40,50];
// a1.forEach(function(valor,indice,array){
//     console.log(valor,indice,array);
// });

//todo3-forEach imitando o reduce
const a1=[10,20,30,40,50];
let total=0;
a1.forEach(valor=>total+=valor);
console.log(total);
