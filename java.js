let Top10=document.getElementById("Top10")
    matematica=document.getElementById("Matematicas")
    geografia=document.getElementById("Geografia")
    anatomia=document.getElementById("Anatomia")
    sistemasolar=document.getElementById("SistemaSolar")

function mostrar1(){
    Top10.style.display="flex";
    matematica.style.display="none";
    geografia.style.display="none";
    anatomia.style.display="none";
    sistemasolar.style.display="none";
}
function mostrar2(){
    Top10.style.display="none";
    matematica.style.display="flex";
    geografia.style.display="none";
    anatomia.style.display="none";
    sistemasolar.style.display="none";
}
function mostrar3(){
    Top10.style.display="none";
    matematica.style.display="none";
    geografia.style.display="flex";
    anatomia.style.display="none";
    sistemasolar.style.display="none";
}
function mostrar4(){
    Top10.style.display="none";
    matematica.style.display="none";
    geografia.style.display="none";
    anatomia.style.display="flex";
    sistemasolar.style.display="none";
}
function mostrar5(){
    Top10.style.display="none";
    matematica.style.display="none";
    geografia.style.display="none";
    anatomia.style.display="none";
    sistemasolar.style.display="flex";
}
document.getElementById("boton1").addEventListener("click",mostrar1,true)
document.getElementById("boton2").addEventListener("click",mostrar2,true)
document.getElementById("boton3").addEventListener("click",mostrar3,true)
document.getElementById("boton4").addEventListener("click",mostrar4,true)
document.getElementById("boton5").addEventListener("click",mostrar5,true)

let menuPrincipal=document.getElementById("menuPrincipal")
    menuPrincipal.addEventListener("click",mostrarOcultar,true)
function mostrarOcultar(){
    let menuOculto=document.getElementById("navegador")
    verificarDisplay=window.getComputedStyle(menuOculto).getPropertyValue("display")
    if(verificarDisplay==="flex"){
        menuOculto.style.display="none"
    }
    else{
        menuOculto.style.display="flex"
    }
}




    
