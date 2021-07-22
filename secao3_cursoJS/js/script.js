function meuScopo() {
    // todo-acessando o form/pelo document usando a classe
    const form = document.querySelector('.form');
    // acessando a div resultado
    const resultado = document.querySelector('.resultado');

    //todo-criando um array para salvar os objetos
    const pessoas = [];

    // criado a funcao para prevenir que a pagina se recarregue

    function recebeEventoForm(evento) {
        // preventdefault previne o recarregamento
        evento.preventDefault();

        // acessando os inputs
        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        // todo-solucao criada por mim , no entanto existe solucao melhor
        // pessoas[0]=nome.value;
        // pessoas[1]=sobrenome.value;
        // pessoas[2]=peso.value;
        // pessoas[3]=altura.value;

        //todo-solucao do professor/inserido dentro do array o objeto {} , chave : valor ;

        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        })

        console.log(pessoas);
        // todo-colocando o resultado no html-preciso colocar a relacao com o html chamando innerHTML que foi selecionado la em cima 
        resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} ` + ` ${peso.value} ${altura.value} </p>`
    }

    // todo-fazendo com que o evento de clicar chame a funcao recebeEventoForm...colocando o espião no form
    //      evento     função
    form.addEventListener('submit', recebeEventoForm);

}

// chamando a funcao

meuScopo();