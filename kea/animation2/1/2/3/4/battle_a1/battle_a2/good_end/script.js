let hover = document.querySelector(".corner");
let fondo = document.querySelector("main");
hover.addEventListener('mouseover', skift);
hover.addEventListener("mouseout", skift2);
function skift(){
fondo.style.backgroundImage ="url(art.png)"
}
function skift2(){
fondo.style.backgroundImage ="url(kunst.png)"
}
