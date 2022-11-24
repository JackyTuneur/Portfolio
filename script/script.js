"use strict"

let carousselDom = document.getElementById("carousselInside");
let goRightButtonFromCaroussel1 = document.getElementById("goRightB");
let goLeftButtonFromCaroussel1 = document.getElementById("goLeftB");
let goRightButtonFromCaroussel0 = document.getElementById("goRightB1");
let goLeftButtonFromCaroussel0 = document.getElementById("goLeftB1");
let goRightButtonFromCaroussel2 = document.getElementById("goRightB2");
let goLeftButtonFromCaroussel2 = document.getElementById("goLeftB2");
let loadingSlide = document.getElementById("loadingSlide");
let logoChange = document.getElementById("logoChange");
loadingSlide.children[1].classList.add("active");

let actualCaroussel=1;
let waitTime = 5;

const goToCaroussel2 = () =>{
    waitTime = 5;
    logoChange.classList.add("blue");
    logoChange.classList.remove("red");
    logoChange.classList.remove("green");
    carousselDom.style.transform = "translateX(-100%)"
    loadingSlide.children[2].classList.add("active");
    loadingSlide.children[1].classList.remove("active");
    loadingSlide.children[0].classList.remove("active");
    actualCaroussel=2;
}

const goToCaroussel1 = () =>{
    waitTime = 5;
    logoChange.classList.add("red");
    logoChange.classList.remove("blue");
    logoChange.classList.remove("green");
    carousselDom.style.transform = "translateX(0%)"
    loadingSlide.children[1].classList.add("active");
    loadingSlide.children[2].classList.remove("active");
    loadingSlide.children[0].classList.remove("active");
    actualCaroussel=1;
}

const goToCaroussel0 = () =>{
    waitTime = 5;
    logoChange.classList.add("green");
    logoChange.classList.remove("red");
    logoChange.classList.remove("blue");
    carousselDom.style.transform = "translateX(100%)"
    loadingSlide.children[0].classList.add("active");
    loadingSlide.children[1].classList.remove("active");
    loadingSlide.children[2].classList.remove("active");
    actualCaroussel=0;
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

const autoSlide = () => {
    setTimeout(() => {
        waitTime -= 0.2
            if(waitTime <= 0){
                if(actualCaroussel ===0){
                    goToCaroussel1();
                }else if(actualCaroussel ===1){
                    goToCaroussel2();
                }else if(actualCaroussel ===2){
                    goToCaroussel0();
            }
        }
        autoSlide();
    }, 200);
}

autoSlide();