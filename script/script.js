"use strict"

let carousselDom = document.getElementById("carousselInside");
let goRightButtonFromCaroussel1 = document.getElementById("goRightB");
let goLeftButtonFromCaroussel1 = document.getElementById("goLeftB");
let goRightButtonFromCaroussel0 = document.getElementById("goRightB1");
let goLeftButtonFromCaroussel0 = document.getElementById("goLeftB1");
let goRightButtonFromCaroussel2 = document.getElementById("goRightB2");
let goLeftButtonFromCaroussel2 = document.getElementById("goLeftB2");

const goToCaroussel2 = () =>{
    carousselDom.style.transform = "translateX(-100%)"
}

const goToCaroussel1 = () =>{
    carousselDom.style.transform = "translateX(0%)"
}

const goToCaroussel0 = () =>{
    carousselDom.style.transform = "translateX(100%)"
}

goRightButtonFromCaroussel1.addEventListener("click", () => {
    goToCaroussel2();
})

goLeftButtonFromCaroussel1.addEventListener("click", () => {
    goToCaroussel0();
})

goRightButtonFromCaroussel0.addEventListener("click", () => {
    goToCaroussel1();
})

goLeftButtonFromCaroussel0.addEventListener("click", () => {
    goToCaroussel2();
})

goRightButtonFromCaroussel2.addEventListener("click", () => {
    goToCaroussel0();
})

goLeftButtonFromCaroussel2.addEventListener("click", () => {
    goToCaroussel1();
})