const nomes=['maria','joana','eduardo'];

//inserindo novo elemento no array
nomes.push('joao');
console.log(nomes);

//exemplo 2-valor por referencial

// const novo=nomes;//novo e nomes terao os mesmos valores ,modificando um eu modifico o outro
// novo.pop();
// console.log(novo,nomes);

//exemplo3-usando o spread-clonagem do array , mas ele se torna independente ,oq eu mudo em um não interfere no outro
// const novo=[...nomes];
// novo.pop();//removendo elemento do final
// novo.shift();//removendo elemento do inicio, não é o mais recomendado , pois mexe nos indices
// console.log(novo,nomes);

//exemplo4-adicionando elementos
// nomes.push('erika');//adiciona no final
// nomes.unshift('fabio');//adiciona no inicio, mexe no indice
// console.log(nomes);

//exemplo5-convertendo array em string
// const nome=nomes.join(' '); //separando por espaco
// console.log(nome);

//exemplo6-covertendo string em array
// const nome1="Paulo Luis da Silva";
// const nome=nome1.split(' ');//separando por espaço
// console.log(nome);

//exemplo7-fatiando o array
                //0=primeiro -1=remova o ultimo
const novo=nomes.slice(0,-1);
const novo1=nomes.slice(1,3);
console.log(novo);
console.log(novo1);





