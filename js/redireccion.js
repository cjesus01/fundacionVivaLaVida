let botonesAyudar=document.querySelectorAll(".redireccion_botones");
asignarEvento();
const usuario = localStorage.getItem('usuario');

function asignarEvento(){
    for(let boton of botonesAyudar){
        boton.addEventListener("click", ()=>{
            if(usuario==null){
                let p=document.createElement('p');
                let padre=boton.parentElement;
                padre.removeChild(boton.nextSibling);
                padre.insertBefore(p, boton.nextElementSibling);
                p.classList.add("parrafoNecesitaIngresar");
                p.style.marginTop="14px";
                p.innerHTML="Necesita registrarse para llevar realizar esa acción.";
            }
            else if(usuario!=null){
                window.location.href="contacto.html";
            }
        })
    }
}


