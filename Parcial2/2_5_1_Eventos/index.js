let parrafo = document.getElementById("parrafo1")
let encabezadoPrincipal = document.getElementById("encabezadoPrincipal")
let imagen = document.getElementById("imgLogosWindows")
let fuenteImagen = imagen.getAttribute("src")
let tablaVersiones = document.getElementById("tablaLanzamientos")
let filaTabla = document.getElementById("filaTabla");
const textoParrafo = parrafo.innerText

parrafo.addEventListener("click",()=>{
    parrafo.textContent="Hola";

    setTimeout(()=>{
        parrafo.innerText=textoParrafo
    },3000)
});

encabezadoPrincipal.onmouseover=()=>{
    encabezadoPrincipal.innerText="Windows Operating System"
}
encabezadoPrincipal.onmouseout=()=>{
    encabezadoPrincipal.innerText="Sistema Operativo Windows"
}

imagen.addEventListener("click",()=>{
    imagen.setAttribute("src","https://www.theglobeandmail.com/resizer/v2/MGVGGKC3MBHSBOJYEKKMYTVCAU?auth=b395361473a9c03e091ab527816f2c9ff03b9612fddb6c335eb49c4559586374&width=1200&quality=80")
    setTimeout(()=>{
        imagen.setAttribute("src",fuenteImagen)
    },10000)
});

tablaVersiones.addEventListener("click",()=>{
    alert(tablaVersiones.innerText.length)
})
