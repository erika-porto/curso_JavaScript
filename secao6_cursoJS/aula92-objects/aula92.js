//todo-Objects
/*Object.values
  Object.entries()-retorna o array com chave e valor
  Object.getOwnPropertyDescriptor(object,'prop')-mostra as propriedades do object: enumerable, configurable,writable
  Object.assign({destino},)-cria um novo objeto(destino) e coloca nele oque desejar*/

//todo2-Object.assign()
// const produto={nome:'produto','preco':1.8};
// const caneca=Object.assign({},produto,{material:'porcelana'});

// console.log(caneca);

//todo2-Object.getOwnPropertyDescriptor()
// const produto={nome:'produto','preco':1.8};
// console.log(Object.getOwnPropertyDescriptor(produto,'nome'));

//alterando os valores
// Object.defineProperty(produto,'nome',{
//     writable:false,
//     configurable:false
// });

// produto.nome='outra coisa';  //ele nao altera pq coloquei writbale como false 
// console.log(produto);

//todo3-pegando os valores
// const produto={nome:'produto','preco':1.8};
// console.log(Object.values(produto));

//todo4-pegando o objeto como todo , chave e valor
const produto={nome:'produto','preco':1.8};
console.log(Object.entries(produto));

//desestruturando
for(let [chave,valor] of Object.entries(produto)){
    console.log(chave,valor);
}


  

