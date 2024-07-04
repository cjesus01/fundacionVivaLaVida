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
        IngresarLi.style.display="none";
        CerrarSesion.style.display="block";
    }
    else{
        IngresarLi.style.display="block";
        CerrarSesion.style.display="none";
    }
}

CerrarSesion.addEventListener("click", function(){
    localStorage.clear();
    usuarioLogin=null;
    comprobarSesion();
    window.location.href='index.html';
})