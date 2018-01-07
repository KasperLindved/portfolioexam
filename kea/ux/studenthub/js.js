let news = document.querySelector("#newsico")
let hub = document.querySelector("#hubico")
let buddy = document.querySelector("#buddyico")
let discount = document.querySelector("#discountico")
let newstext = document.querySelector("#newstext")
let hubtext = document.querySelector("#hubtext")
let buddytext = document.querySelector("#buddytext")
let discounttext = document.querySelector("#discounttext")
let newsscreen = document.querySelector("#newsscreen")
let buddyscreen = document.querySelector("#buddyscreen")
let chatscreen = document.querySelector("#chatscreen")
let discountscreen = document.querySelector("#discountscreen")

news.addEventListener("click",shownews)
hub.addEventListener("click",showhub)
buddy.addEventListener("click",showbuddy)
discount.addEventListener("click",showdiscount)

function shownews(){
    console.log("Show News Feature")
    Array.from(document.querySelectorAll(".tab"))
    .forEach(function(val) {
        val.style.display = 'none';
        });
    Array.from(document.querySelectorAll(".proto"))
    .forEach(function(val) {
        val.style.display = 'none';
        });
    document.getElementById('newstext').style.display = "block";
    document.getElementById('newsscreen').style.display = "block";
}

function showhub(){
    console.log("Show Hub Feature")
    Array.from(document.querySelectorAll(".tab"))
    .forEach(function(val) {
        val.style.display = 'none';
        });
    Array.from(document.querySelectorAll(".proto"))
    .forEach(function(val) {
        val.style.display = 'none';
        });
    document.getElementById('hubtext').style.display ="block";
    document.getElementById('buddyscreen').style.display = "block";
    }

function showbuddy(){
    console.log("Show Buddy Feature")
    Array.from(document.querySelectorAll(".tab"))
    .forEach(function(val) {
        val.style.display = 'none';
    });
    Array.from(document.querySelectorAll(".proto"))
    .forEach(function(val) {
        val.style.display = 'none';
        });
    document.getElementById('buddytext').style.display ="block";
    document.getElementById('chatscreen').style.display = "block";
    }

function showdiscount(){
    console.log("Show Discount Feature")
    Array.from(document.querySelectorAll(".tab"))
    .forEach(function(val) {
        val.style.display = 'none';
        Array.from(document.querySelectorAll(".proto"))
    .forEach(function(val) {
        val.style.display = 'none';
        });
       }); document.getElementById('discounttext').style.display="block";
            document.getElementById('discountscreen').style.display = "block";
}
