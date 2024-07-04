
const URL="https://668466d156e7503d1ae02f14.mockapi.io/api/usuarios";
let nombreIngresado=document.getElementById("ingresar_usuario");
let contrasenaIngresado=document.getElementById("ingresar_contrasenia");

let botonIngresar=document.getElementById("botonIngresar");
let textoAviso=document.getElementById("textoAviso");
let textoUsuario=document.getElementById("textoUsuario");
let textoContrasena=document.querySelector("#textoContrasena");

botonIngresar.addEventListener("click", ()=>{
    textoAviso.innerHTML="";
    textoUsuario.innerHTML="";
    textoContrasena.innerHTML="";
    if(nombreIngresado.value=="" || contrasenaIngresado.value==""){
        textoAviso.innerHTML="Necesita completar todos los campos.";
    }
    else if(nombreIngresado.value!="" && contrasenaIngresado.value!=""){
        obtenerPersona(nombreIngresado.value, contrasenaIngresado.value);
    }
})

async function obtenerPersona(nombre, contrasena){
    let seEncontro=false;
    nombreIngresado.classList.remove("valorValido");
    nombreIngresado.classList.remove("valorInvalido");
    contrasenaIngresado.classList.remove("valorValido");
    contrasenaIngresado.classList.remove("valorInvalido");
    try{
        let res= await fetch(URL);
        let json= await res.json();
        tamañoJSON=json.length;
        for(let persona of json){
            if(persona.nombre_usuario==nombre){
                seEncontro=true;
                nombreIngresado.classList.add("valorValido");
                if(persona.contrasena==contrasena){
                    contrasenaIngresado.classList.add("valorValido");
                    localStorage.setItem('usuario', JSON.stringify(persona));
                    location.href="index.html";
                }
                else{
                    contrasenaIngresado.classList.add("valorInvalido");
                    textoContrasena.innerHTML="Se encuentra incorrecta la contraseña.";
                }
            }
        }
        if(!seEncontro){
            textoUsuario.innerHTML="Se encuentra incorrecto el nombre del usuario.";
            nombreIngresado.classList.add("valorInvalido");
            contrasena="";
        }
    }
    catch{
        alert("Ha surgido un error con el servidor, intentelo más tarde.");
    }
}


