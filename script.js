"use strict"
// ** I did this myself - the problem is there is a lot of redundant codes
const q1 = document.querySelector(".q1");
const q2 = document.querySelector(".q2");
const q3 = document.querySelector(".q3");
const q4 = document.querySelector(".q4");

const a1 = document.querySelector(".a1");
const a2 = document.querySelector(".a2");
const a3 = document.querySelector(".a3");
const a4 = document.querySelector(".a4");

const icon = document.querySelector(".icon")

function openAnswer1() {
    a1.style.display = "block"
    a2.style.display = "none"
    a3.style.display = "none"
    a4.style.display = "none"
    icon.src = "assets/images/icon-minus.svg";
}

function openAnswer2() {
    a2.style.display = "block"
    a1.style.display = "none"
    a3.style.display = "none"
    a4.style.display = "none"
}

function openAnswer3() {
    a3.style.display = "block"
    a2.style.display = "none"
    a1.style.display = "none"
    a4.style.display = "none"
}

function openAnswer4() {
    a4.style.display = "block"
    a2.style.display = "none"
    a3.style.display = "none"
    a1.style.display = "none"
}

