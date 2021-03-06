"use strict";
/**
 * array.prototype.findIndex
 * element.classList.remove()
 * element.classList.add()
 * new Image()
 */
const images = document.querySelectorAll("img");
let itemsImg = [...images];

const btnNext = document.querySelector(".next");
const btnPrevious = document.querySelector(".previous");


const getIndex = () => {
    return itemsImg.findIndex(
        el => {
            return el.classList.contains('visible');
        }
    );
}
const avanzar = (e) => {

    let index = getIndex();
    if (index < itemsImg.length - 1) {
        itemsImg[index].classList.remove('visible');


        itemsImg[index].nextElementSibling.classList.add('visible');
        itemsImg[index].nextElementSibling.style.left = `0`;
    }
    console.log(getIndex())
    if (getIndex() === itemsImg.length - 1)
        e.target.classList.add("btn-hidden");
    else
        btnPrevious.classList.remove("btn-hidden");
}

const retroceder = (e) => {

    let index = getIndex();
    let tam = 100;
    if (index > 0) {
        tam = index * tam;
        itemsImg[index].classList.remove('visible');
        itemsImg[index].style.left = `-${tam}%`;
        itemsImg[index].previousElementSibling.classList.add('visible');

    }
    console.log(getIndex())
    if (getIndex() === 0)
        e.target.classList.add("btn-hidden");
    else
        btnNext.classList.remove("btn-hidden");
}


const img = new Image();
img.classList.add("imagen");
img.style.width = "50vw";
document.querySelector("body").prepend(img);
img.src = "../img/loader.gif";
const removeLoader = () => {
    img.parentElement.removeChild(img);
}



/**
 * Eventos
 */
window.addEventListener(
    "load",
    removeLoader
);



btnNext.addEventListener(
    "click",
    avanzar
);

btnPrevious.addEventListener(
    "click",
    retroceder
);