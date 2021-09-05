// acessando todos os required
const fields = document.querySelectorAll("[required]")

function ValidateField(field) {

    // logica para verificar se existem erros
    function verifyErrors() {
        let foundError = false;

        // validity como objeto cheio de propriedades
        // for in vai iterar sobre cada propriedade
        for(let error in field.validity) {
            // se não for customError
            // então verifica se tem erro
            //entra desde que o valid seja falso ou seja invalido
            if (field.validity[error] && !field.validity.valid ) {
                foundError = error
            }
        }
        return foundError;
    
    }

    // customizando as mensagens
    function customMessage(typeError) {
        const messages = {
            text: {
                valueMissing: "Por favor, preencha este campo"
            },
            email: {
                valueMissing: "Email é obrigatório",
                typeMismatch: "Por favor, preencha um email válido"
            }
        }

        return messages[field.type][typeError]
    }

    function setCustomMessage(message) {
        // field=input , sobre ate o pai(parentNode) e pegue o span.error
        const spanError = field.parentNode.querySelector("span.error")
        
        // se estiver invalido vai chamar a mensagem 
        if (message) {
            spanError.classList.add("active")
            spanError.innerHTML = message
        } else {  //senão tira o active e limpa o campo
            spanError.classList.remove("active")
            spanError.innerHTML = ""
        }
    }

    return function() {

        const error = verifyErrors()

        // se houver erros vai estilizar o campo com o apn em vermelho
        if(error) {
            const message = customMessage(error)

            field.style.borderColor = "red"
            setCustomMessage(message)
        } else {  //senão vai deixar o campo em verde
            field.style.borderColor = "green"
            setCustomMessage()
        }
    }
}


function customValidation(event) {

    const field = event.target
    // capturando o resultado da funcao validateField na const validation , e como é uma função só chamar depois 
    const validation = ValidateField(field)

    validation()

}

for( field of fields ){
    field.addEventListener("invalid", event => { 

        // eliminar o bubble, ele só existe na invalid
        event.preventDefault()

        customValidation(event)
    })
    // quando eu saio do campo , chama customValidation
    field.addEventListener("blur", customValidation)
}


document.querySelector("form")
.addEventListener("submit", event => {
    console.log("enviar o formulário")

    // não vai enviar o formulário
    event.preventDefault()
})