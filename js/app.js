"use strict";
/**
 * 
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


btnNext.addEventListener(
    "click",
    avanzar
);

btnPrevious.addEventListener(
    "click",
    retroceder
);