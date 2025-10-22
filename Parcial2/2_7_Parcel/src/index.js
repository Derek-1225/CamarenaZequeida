import {say} from 'cowsay';
let vk=say({text: 'Saludos a Emmanuel Blanco'});
document.getElementById("vaca").innerText=vk

let fondo=document.querySelector("body")
let btnCambiarColor=document.getElementById("btnCambiarColor")
btnCambiarColor.addEventListener("click",()=>{
    if(fondo.style.backgroundColor=="cyan"){
        fondo.style.backgroundColor="yellow"
    }else{
        fondo.style.backgroundColor="cyan"
    }
})
