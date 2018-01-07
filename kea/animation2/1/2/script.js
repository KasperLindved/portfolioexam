let yojimbo = document.querySelector(".heroe");
let rick = document.querySelector(".rick");

yojimbo.addEventListener('click', rickSale);
function rickSale(){
rick.classList.toggle("animacion_rick");
}
