let botonesAyudar=document.querySelectorAll(".formas_ayudar_boton");
asignarEvento();
const usuario = localStorage.getItem('usuario');


function asignarEvento(){
    for(let boton of botonesAyudar){
        boton.addEventListener("click", ()=>{
            console.log(localStorage.getItem('usuario'));
            if(usuario==null){
                console.log("entra null");
                window.location.href="ingresar.html";
            }
            else if(usuario!=null){
                window.location.href="contacto.html";
            }
        })
    }
}


