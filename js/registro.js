let nombre=document.getElementById("nombre");
let contrasena= document.getElementById("contrsenia");
let email=document.getElementById("email");
let telefono=document.getElementById("telefono");
let botonConsulta=document.getElementById("botonConsulta");
let parrafoAvisoConsulta=document.querySelector(".parrafoAvisoConsulta");
let parrafoNombre=document.getElementById("textoNombre");
let parrafoContrasena=document.getElementById("textoContrasena");
let parrafoEmail=document.getElementById("textoEmail");
let parrafoTelefono=document.getElementById("textoTelefono");

const expresionEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const expresionTel = /^[0-9]{4}-[0-9]{6}$/;



botonConsulta.addEventListener("click", ()=>{
    if(nombre.value=="" || apellido.value=="" || email=="" || telefono==""){
        parrafoAvisoConsulta.innerHTML="";
        parrafoAvisoConsulta.innerHTML="Necesita completar todos los campos";
    }
    else{
       if(comprobarTodosLosCamposValidos()){
        registro=true;
            window.location.href='ingresar.html';
       }
       else{
        parrafoAvisoConsulta.innerHTML="";
        parrafoAvisoConsulta.innerHTML="No se encuentran validos todos los campos, revise nuevamente los ingresado.";
       }
    }
})

contrasena.addEventListener("input", ()=>{
    contrasena.classList.remove("valorValido");
    contrasena.classList.remove("valorInvalido");
    if(contrasena!=""){
        parrafoContrasena.innerHTML="";
        contrasena.classList.add("valorValido");
    }
    else{
        contrasena.classList.add("valorInvalido");
        parrafoContrasena.innerHTML="La contraseña no es válida.";
    }
})
nombre.addEventListener("input", ()=>{
    nombre.classList.remove("valorValido");
    nombre.classList.remove("valorInvalido");
    if(contrasena.value!=""){
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

function comprobarTodosLosCamposValidos(){
    if(nombre.classList.contains("valorValido") && contrasena.classList.contains("valorValido")
       && email.classList.contains("valorValido") && telefono.classList.contains("valorValido")){
            return true;
        }
        return false;
}