
const fields=document.querySelectorAll("[required]")

// funcao que muda o texto do required
function customValidation(event){

    const field=event.target;

    // logica para verificar se existem erros
    function verifyErrors(){
        let foundError=false;

        // for in vai iterar sobre cada propriedade do objeto error poderia ser chamado de key
        for (let error in field.validity){
        //    console.log(field.validity[error])

            if(error ≠ "customError" && field.validity[error]){
                foundError=error
            }
        }
        return foundError;
    }

    const error= verifyErrors();
    console.log("Error Exists",error)

    verifyErrors();

    if(error){
        // troca a mensagem do required
        fields.setCustomValidity("Esse campo é obrigatório")
    }else{
        field.setCustomValidity("")
    }

    
    //validity objeto com propriedades escondidas:ValueMissing,typeMisMatch,patternMisMatch..
    console.log(field.validity)

    // no Validity-> custom Error :true
    // mensagem disparada toda hora 
    field.setCustomValidity("Esse campo é obrigatório")
}

// node list:coloca o input nessa variavel field
for(field of fields){
    field.addEventListener("invalid",customValidation)
}















document.querySelector("form").addEventListener("submit", (event)=>{
   console.log("pode enviar o formulario");

//    não vai enviar o formulario
   event.preventDefault()
})
