let botonAbrir=document.querySelector(".botonAbrirMenu");
let botonCerrar=document.querySelector(".botonCerrarMenu");
let listaMenu=document.querySelector(".contenedorMenuLista");

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