//Código a ejecutar al cargar la ventana (Página).
window.onload = function(){

    //Mostrar alerta cuando el cursor pasa por encima del logo.
    /* document.getElementById('logo').onmouseover = function(){
        alert('Hardware a excelente precio');
    } */

    //Resaltado de botones del Header al colocar el cursor por encima de uno.
    //var --> Variable Global       let --> Variable local para el bloque
    let btn_Busqueda = document.getElementById('btn_Busqueda');
    let btn_Cuenta = document.getElementById('btn_Cuenta');
    let btn_Carrito = document.getElementById('btn_Carrito');
    let btn_Menu = document.getElementById('btn_Menu');

    function onMouseOver(boton){
        boton.style.color='blueviolet';
        boton.style.textShadow='.2rem .2rem .2rem #333';
    }
    function onMouseLeave(boton){
        boton.style.color='black';
        boton.style.textShadow='none';
    }
    function onMouseDown(boton){
        boton.style.color='violet';
        boton.style.textShadow='none';
    }
    function onMouseUp(boton){
        boton.style.color='blueviolet';
        boton.style.textShadow='.2rem .2rem .2rem #333';
    }
   /*  function closeLogin(btn){
        if(document.getElementById('form_Login').style.display=='block'){
            document.getElementById('form_Login').style.display='none';
        }else{
            document.getElementById('form_Login').style.display='block';
        }
    } */

    btn_Busqueda.addEventListener("mouseover", function(){onMouseOver(btn_Busqueda)});
    btn_Busqueda.addEventListener("mouseleave", function(){onMouseLeave(btn_Busqueda)});
    btn_Busqueda.addEventListener("mousedown", function(){onMouseDown(btn_Busqueda)});
    btn_Busqueda.addEventListener("mouseup", function(){onMouseUp(btn_Busqueda)});
    //btn_Busqueda.addEventListener("", function(){onMouseClick(btn_Busqueda)});

    btn_Cuenta.addEventListener("mouseover", function(){onMouseOver(btn_Cuenta)});
    btn_Cuenta.addEventListener("mouseleave", function(){onMouseLeave(btn_Cuenta)});
    btn_Cuenta.addEventListener("mousedown", function(){onMouseDown(btn_Cuenta)});
    btn_Cuenta.addEventListener("mouseup", function(){onMouseUp(btn_Cuenta)});

    btn_Carrito.addEventListener("mouseover", function(){onMouseOver(btn_Carrito)});
    btn_Carrito.addEventListener("mouseleave", function(){onMouseLeave(btn_Carrito)});
    btn_Carrito.addEventListener("mousedown", function(){onMouseDown(btn_Carrito)});
    btn_Carrito.addEventListener("mouseup", function(){onMouseUp(btn_Carrito)});

    btn_Menu.addEventListener("mouseover", function(){onMouseOver(btn_Menu)});
    btn_Menu.addEventListener("mouseleave", function(){onMouseLeave(btn_Menu)});
    btn_Menu.addEventListener("mousedown", function(){onMouseDown(btn_Menu)});
    btn_Menu.addEventListener("mouseup", function(){onMouseUp(btn_Menu)});

    searchItem = document.getElementById("searchDiv");
    avisos = document.getElementById("avisos");
    btn_Busqueda.onclick = function(){
        if(searchItem.style.display=="flex"){
            avisos.style.display="none";
            searchItem.style.display="none";
        }else{
            avisos.style.display="block";
            searchItem.style.display="flex";
        }
    }

    let btn_Cerrar = document.getElementById("btn_Cerrar");
    let btn_Cancelar = document.getElementById("btn_Cancelar");
    let close_Login = document.getElementById("close_Login");

    btn_Cerrar.onclick = function(){
        avisos.style.display="none";
        searchItem.style.display="none";
    }
    
    /* btn_Cancelar.addEventListener("onclick", function(){changeLogin(btn_Cancelar)});
    btn_Cuenta.addEventListener("onclick", function(){changeLogin(btn_Cuenta)}); */

    btn_Cuenta.onclick=function(){
        document.getElementById('form_Login').style.display='block';
    }

    btn_Cancelar.onclick=function(){
        document.getElementById('form_Login').style.display='none';
    }

    close_Login.onclick=function(){
        document.getElementById('form_Login').style.display='none';
    }

    //Cerrar formulario de Login al hacer click en cualquier otro lado
    // Get the modal
    let modal = document.getElementById('form_Login');

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }else if(event.target==avisos){
            avisos.style.display = "none";
        }
    }
}