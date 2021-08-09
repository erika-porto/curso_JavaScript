//FACTORY FUNCTIONS 
function criaPessoa(nome,sobrenome){
    return{
        nome,
        sobrenome,
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`
        }
    };
}
const p1=criaPessoa('Luiz','Otavio');
console.log(p1.nomeCompleto);


//CONSTRUCTOR FUNCTIONS
function Pessoa(nome,sobrenome){
    this.nome=nome;
    this.sobrenome=sobrenome;
}

const p3=new Pessoa('Maria','Silva');

//todo1-modificando o valor do nome
p3.nome='mudando nome';

//todo2-travando elemento
const p4=new Pessoa('Carol','Rosi');
Object.freeze(p4);
p4.nome='tentando mudar';

//tentando mudar o p4, mas ta impedido
console.log(p3,p4);