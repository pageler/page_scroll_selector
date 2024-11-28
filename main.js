"use strict";

let indicator = document.querySelector(".scroll-indicator .progress");
console.dir(indicator); // > div.progress
let scrollHeight = 
document.documentElement.scrollHeight - document.documentElement.clientHeight;

window.addEventListener("scroll", scroll);

function scroll() {
    let scrollTop = document.documentElement.scrollTop;
    let scrolled = (scrollTop / scrollHeight) * 100;
    indicator.style.width = `${scrolled}%`
}