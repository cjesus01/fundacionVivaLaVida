const URL="https://668466d156e7503d1ae02f14.mockapi.io/api/usuarios";

let nombre=document.getElementById("usuario");
let contrasena= document.getElementById("contrasenia");
let email=document.getElementById("email");
let telefono=document.getElementById("telefono");
let boton_loggin=document.querySelector(".boton_loggin");
let parrafoAvisoConsulta=document.querySelector(".parrafoAvisoConsulta");
let parrafoNombre=document.getElementById("textoNombre");
let parrafoContrasena=document.querySelector(".textoContrasena");
let parrafoEmail=document.getElementById("textoEmail");
let parrafoTelefono=document.getElementById("textoTelefono");

const expresionEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const expresionTel = /^[0-9]{4}-[0-9]{6}$/;
const expresionContrasena=/^(?=.*\d)[A-Za-z\d]{8,}$/;


boton_loggin.addEventListener("click", ()=>{
    if(nombre.value=="" || contrasena.value=="" || email=="" || telefono==""){
        parrafoAvisoConsulta.innerHTML="";
        parrafoAvisoConsulta.innerHTML="Necesita completar todos los campos";
    }
    else{
       if(comprobarTodosLosCamposValidos()){
            let usuario={
                nombre_usuario: nombre.value,
                contrasena:contrasena.value,
                Email:email.value,
                telefono:telefono.value
            }
            crearUsuario(usuario);
       }
       else{
        parrafoAvisoConsulta.innerHTML="";
        parrafoAvisoConsulta.innerHTML="No se encuentran validos todos los campos, revise nuevamente los ingresado.";
       }
    }
})

contrasena.addEventListener("change", ()=>{
    contrasena.classList.remove("valorValido");
    contrasena.classList.remove("valorInvalido");
    if(expresionContrasena.test(contrasena.value)){
        parrafoContrasena.innerHTML="";
        contrasena.classList.add("valorValido");
    }
    else{
        contrasena.classList.add("valorInvalido");
        parrafoContrasena.innerHTML="La contraseña no es válida.";
    }
})
nombre.addEventListener("change", ()=>{
    nombre.classList.remove("valorValido");
    nombre.classList.remove("valorInvalido");
    if(nombre.value!=""){
        NoExisteUsuario();
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

async function NoExisteUsuario(){
    let encuentra=false;
    try{
        let res= await fetch(URL);
        let json= await res.json();
        tamañoJSON=json.length;
        for(let persona of json){
            console.log(persona.nombre_usuario==nombre.value);
            if(persona.nombre_usuario==nombre.value){
               encuentra=true;
            }
        }
        if(!encuentra){
            parrafoNombre.innerHTML="";
            nombre.classList.add("valorValido");
        }
        else{
            nombre.classList.add("valorInvalido");
            parrafoNombre.innerHTML="El nombre de ese usuario ya existe.";
        }
    }
    catch{
        alert("Ha surgido un error con el servidor, intentelo más tarde.");
    }
}

async function crearUsuario(usuario){
    try{
        let res = await fetch(URL, {
            "method": "POST",
            "headers": { "Content-type": "application/json" },
            "body": JSON.stringify(usuario)
        });
        if(res.status==201){
            console.log("creado");
            window.location.href='ingresar.html';
        }
    }
    catch(error){
       alert("Se ha generado un error, intentelo más tarde.");
    };
}