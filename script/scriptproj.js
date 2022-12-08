"use strict"

window.onload = (event) => {
    console.log("hop");
    document.getElementById("loadingPage").classList.add("disapear");
  };

let prevuLeft = document.querySelectorAll(".prevu");
let prevuRight = document.querySelectorAll(".prevu2");

let clientHeight = document.documentElement.clientHeight;
let clientWidth = document.documentElement.clientWidth;

let logMovement = (e) => {
  if(!clientHeight > clientWidth){
    let mouseX = e.clientX / clientWidth *100;
    let mouseY = e.clientY / clientHeight *100;
    mouseX = mouseX - 50;
    mouseY = mouseY - 50;
    fancyEffectOnMouseMoove(mouseX, mouseY);
  }
}

document.addEventListener('mousemove', logMovement);

const fancyEffectOnMouseMoove = (mouseX, mouseY) => 
{
  let rotateXString1 = "rotateX("+(mouseY-mouseY-mouseY)/3+"deg)"
  let rotateYString1 = "rotateY("+(10 + mouseX/3)+"deg)"
  let rotateXString2 = "rotateX("+(mouseY-mouseY-mouseY)/3+"deg)"
  let rotateYString2 = "rotateY("+(-10 + (mouseX/3))+"deg)"


  for(let i = 0; i<prevuLeft.length;i++){
    prevuLeft[i].style.transform = rotateYString1 + rotateXString1;
  }

  for(let j = 0; j<prevuRight.length;j++){
    prevuRight[j].style.transform = rotateYString2 + rotateXString2;
  }

}