let hero = document.querySelector("img.hero");
let shakeButton = document.querySelector("#shake");
let rotateButton = document.querySelector("#rotate");
let viagraButton = document.querySelector("#viagra");
let moveButton = document.querySelector("#move");
let gotButton = document.querySelector("#got");
let jumpButton = document.querySelector("#jump");
let aroundButton = document.querySelector("#around");
let dieButton = document.querySelector("#die");
let fadeButton = document.querySelector("#fade");
let mirrorButton = document.querySelector("#mirror");
let moveto30Button = document.querySelector("#moveto30");
let movefrom30Button = document.querySelector("#movefrom30");




shakeButton.addEventListener('click', makeShake);
rotateButton.addEventListener('click', makeRotate);
viagraButton.addEventListener('click', makeHard);
moveButton.addEventListener('click', makeMove);
gotButton.addEventListener('click', makeGot);
jumpButton.addEventListener('click', makeJump);
aroundButton.addEventListener('click', makeAround);
dieButton.addEventListener('click', makeDie);
fadeButton.addEventListener('click', makeFade);
moveto30Button.addEventListener('click', makeMoveto30);
movefrom30Button.addEventListener('click', makeMovefrom30);

function makeShake() {
    console.log("make shake");
    hero.classList.toggle("shakeCSS");

}

function makeRotate() {
    console.log("make rotate");
    hero.classList.add("rotateCSS");

}


function makeHard() {
    console.log("make hard");
    hero.classList.toggle("viagraCSS");

}


function makeMove() {
    console.log("make move");
    hero.classList.toggle("moveCSS");

}

function makeGot() {
    console.log("make got");
    var sound = document.getElementById("gotlyd");
    sound.play();
    makeShake();
}


function makeJump() {
    console.log("make jump");
    hero.classList.add("jumpCSS");
}

function makeAround() {
    console.log("make around");
    hero.classList.add("aroundCSS")
}

function makeDie () {
    console.log("make die");
    hero.classList.add("dieCSS")
}

function makeFade() {
    console.log("make fade");
    hero.classList.toggle("fadeCSS");

}

function makeMoveto30() {
    console.log("make moveto30");
    hero.classList.add("moveto30CSS");

}


function makeMovefrom30() {
    console.log("make movefrom30");
    hero.classList.add("movefrom30CSS");

}
