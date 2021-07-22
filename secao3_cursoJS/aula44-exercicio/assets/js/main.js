

//todo1 capturar o evento de submit do formulario
const form = document.querySelector('#form');

//todo2 parando o envio do formulario usando o evento
// e de evento
form.addEventListener('submit', function (e) {
    e.preventDefault();

    //   pegando o input inteiro/e.target=me informa o elemento que recebe esse evento -me informa qual elemento foi clicado
    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');

    // agora sim pegando os valores dos inputs, determinando que sao numeros , mas isso nao restrige o usuario de digitar letras, por isso cria-se as condicionais 
    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    //todo-condicionais
    // se peso for falso( for NaN ), isso que indica o !, vai ter o fundo vermelho
    if (!peso) {

        //todo-criando a ligacao dessa condicional com a funcao setResultado
        setResultado('Peso inválido', false);

        //!return para impedir que o js continue lendo o restante das funcoes , pois se peso for falso , não pode continuar o processo
        return
    }
    if (!altura) {
        setResultado('Altura inválida', false);

        //!return para impedir que o js continue lendo o restante das funcoes , pois se peso for falso , não pode continuar o processo
        return
    }

    //todo-quando vc tem multitarefas , bom dividir em funcoes 
    // funcao para calculo de imc
    const imc = getImc(peso, altura);

    //funcao que divide os niveis
    const nivelImc = getNivelImc(imc);

    // montando a mensagem 
    const msg = `Seu IMC é ${imc} (${nivelImc}).`;

    setResultado(msg, true);
    console.log(imc, nivelImc);

});

// todo-funcao que define o imc por parametro , definindo o nivel de imc
function getNivelImc(imc) {
    // criamos um array=lista de strings;
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso',
        'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];

    // checagem de tras pra frente 
    if (imc >= 39.9) return nivel[5];
    if (imc >= 34.9) return nivel[4];
    if (imc >= 29.9) return nivel[3];
    if (imc >= 24.9) return nivel[2];
    if (imc >= 18.5) return nivel[1];
    if (imc < 18.5) return nivel[0];

}

//todo-funcao do calculo imc
function getImc(peso, altura) {
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
}

//todo-funcao que cria o paragrafo
function criaP() {

    //3- criando um paragrafo dentro de js
    const p = document.createElement('p');

    //criando uma classe nesse paragrafo, para determinar pelo css a mudanca de estilo de acordo com o resultado
    //  p.classList.add('paragrafo-resultado');

    return p;

}


//todo criando uma funcao para mostrar resultado dentro do Html
// se for verdadeiro isValid vai ter fundo verde , 
function setResultado(msg, isValid) {
    // 1-acessando primeiro a div resultado
    const resultado = document.querySelector('#resultado');

    //2-deixando a div html em branco , ou seja limpando ela
    resultado.innerHTML = '';

    // falando para ele inserir dentro da div o p
    // resultado.appendChild(p);

    const p = criaP();

    //checa se é valido entra na primeira condicao e deixa p verde , senão deixa o p no vermelho
    if (isValid) {
        p.classList.add('paragrafo-resultado');
    } else {
        p.classList.add('bad');
    }

    p.innerHTML = msg;

    // adicionando esse paragrafo na div resultado
    resultado.appendChild(p);


}