let botonAbrir=document.querySelector(".botonAbrirMenu");
let botonCerrar=document.querySelector(".botonCerrarMenu");
let listaMenu=document.querySelector(".contenedorMenuLista");
let IngresarLi=document.querySelector(".Ingresar");
let CerrarSesion=document.querySelector(".cerrarSesion");
let usuarioLogin = localStorage.getItem('usuario');

botonAbrir.addEventListener("click", function(){
    botonAbrir.classList.add("ocultarElem");
    botonCerrar.classList.remove("ocultarElem");
    let menu= listaMenu.firstElementChild;
    menu.classList.remove('cerrar');
    menu.classList.toggle('show');
   menu.style.color="white";
})

botonCerrar.addEventListener("click", function(){
    botonAbrir.classList.remove("ocultarElem");
    botonCerrar.classList.add("ocultarElem");
    let menu= listaMenu.firstElementChild;
    menu.classList.remove('show');
    menu.classList.add('cerrar');
   menu.style.color="transparent";
})

comprobarSesion();
function comprobarSesion(){
    if(usuarioLogin!=null){
        IngresarLi.classList.add("ocultarElem");
        CerrarSesion.classList.remove("ocultarElem");
        CerrarSesion.classList.add("mostrarLi");
        document.querySelector('.linkAdoptar').classList.remove("ocultarElem");
    }
    else{
        IngresarLi.classList.remove("ocultarElem");
        CerrarSesion.classList.remove("mostrarLi");
        CerrarSesion.classList.add("ocultarElem");
        document.querySelector('.linkAdoptar').classList.add("ocultarElem");
    }
}

CerrarSesion.addEventListener("click", function(){
    localStorage.clear();
    usuarioLogin=null;
    comprobarSesion();
    window.location.href='index.html';
})