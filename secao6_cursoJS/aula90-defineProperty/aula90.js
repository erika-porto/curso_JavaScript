//todo1-Object.defineProperty()- usado para uma chave e o outro para várias Object.defineProperties()

function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    Object.defineProperty(this, 'estoque', {
        enumerable: true, //mostra a chave
        value: estoque, //valor
        writable: true, //se pode ser alterado
        configurable: true //configurável
    });
}

const p1 = new Produto('camiseta', 20, 3);
p1.estoque = 500;//so modifica por que o writable esta como true
console.log(p1);

//todo2-acessando as chaves
//usando o Object.keys()
console.log(Object.keys(p1));

//usando o FOR IN
for (let chave in p1) {
    console.log(chave);
}