//TODO1-  GETTERS E SETTERS
//usando a constructor function

function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    let estoquePrivado = estoque;

    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: true,


        get: function () {
            return estoquePrivado;
        },

        set: function (valor) {
            if (typeof valor !== 'number') {
                throw new TypeError('Erro');
            }
            estoquePrivado = valor;
        }
    });
}

const p1 = new Produto('Camiseta', 20, 3);
console.log(p1.estoque);

//usando a factory function

function criaProduto(nome) {
    return {

        get nome() {
            return nome;
        },

        set nome(valor) {
            valor = valor.replace('coisa', '');//interceptando o valor , substituindo coisa por nada 
            nome = valor;
        }
    };
}

const p2 = criaProduto('bermuda');
p2.nome = "qualquer coisa.";
console.log(p2.nome);