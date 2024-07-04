let nombre=document.getElementById("nombre");
let apellido= document.getElementById("apellido");
let email=document.getElementById("email");
let telefono=document.getElementById("telefono");
let asunto=document.getElementById("asunto");
let botonConsulta=document.getElementById("botonConsulta");
let parrafoAvisoConsulta=document.querySelector(".parrafoAvisoConsulta");
let parrafoNombre=document.getElementById("textoNombre");
let parrafoApellido=document.getElementById("textoApellido");
let parrafoEmail=document.getElementById("textoEmail");
let parrafoTelefono=document.getElementById("textoTelefono");
let parrafoAsunto=document.getElementById("textoAsunto");

const regex = /^[^0-9]+$/;
const expresionEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const expresionTel = /^[0-9]{4}-[0-9]{6}$/;



botonConsulta.addEventListener("click", ()=>{
    if(nombre.value=="" || apellido.value=="" || email=="" || telefono=="" || asunto==""){
        parrafoAvisoConsulta.innerHTML="";
        parrafoAvisoConsulta.innerHTML="Necesita completar todos los campos";
    }
    else{
       if(comprobarTodosLosCamposValidos()){
            BorrarCampos();
            parrafoAvisoConsulta.innerHTML="";
            parrafoAvisoConsulta.innerHTML="¡Se enviaron los datos correctamente!";
       }
       else{
        parrafoAvisoConsulta.innerHTML="";
        parrafoAvisoConsulta.innerHTML="No se encuentran validos todos los campos, revise nuevamente los ingresado.";
       }
    }
})

apellido.addEventListener("input", ()=>{
    apellido.classList.remove("valorValido");
    apellido.classList.remove("valorInvalido");
    if(regex.test(apellido.value)){
        parrafoApellido.innerHTML="";
        apellido.classList.add("valorValido");
    }
    else{
        apellido.classList.add("valorInvalido");
        parrafoApellido.innerHTML="El apellido no es válido.";
    }
})
nombre.addEventListener("input", ()=>{
    nombre.classList.remove("valorValido");
    nombre.classList.remove("valorInvalido");
    if(regex.test(nombre.value)){
        parrafoNombre.innerHTML="";
        nombre.classList.add("valorValido");
    }
    else{
        nombre.classList.add("valorInvalido");
        parrafoNombre.innerHTML="El nombre no es válido.";
    }
})

email.addEventListener("change", ()=>{
    email.classList.remove("valorValido");
    email.classList.remove("valorInvalido");
    if(expresionEmail.test(email.value)){
        parrafoEmail.innerHTML="";
        email.classList.add("valorValido");
    }
    else{
        email.classList.add("valorInvalido");
        parrafoEmail.innerHTML="El email no es válido.";
    }
})

telefono.addEventListener("change", ()=>{
    telefono.classList.remove("valorValido");
    telefono.classList.remove("valorInvalido");
    console.log(telefono.value);
    if(expresionTel.test(telefono.value)){
        parrafoTelefono.innerHTML="";
        telefono.classList.add("valorValido");
    }
    else{
        telefono.classList.add("valorInvalido");
        parrafoTelefono.innerHTML="El telefono no es válido.";
    }
})

asunto.addEventListener("input", ()=>{
    asunto.classList.remove("valorValido");
    asunto.classList.remove("valorInvalido");
    if(asunto.value.length>20){
        parrafoAsunto.innerHTML="";
        asunto.classList.add("valorValido");
    }
    else{
        asunto.classList.add("valorInvalido");
        parrafoAsunto.innerHTML="El campo no es válido.";
    }
});

function comprobarTodosLosCamposValidos(){
    if(nombre.classList.contains("valorValido") && apellido.classList.contains("valorValido")
       && email.classList.contains("valorValido") && telefono.classList.contains("valorValido")
        && asunto.classList.contains("valorValido")){
            return true;
        }
        return false;
}

function BorrarCampos(){
    let inputs=document.querySelectorAll("input");
    for(let i of inputs){
        i.value="";
    }
    asunto.value="";
    window.scrollTo(0, 0);
}
