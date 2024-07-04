"use strict";

const btnBrands = document.querySelector(".slogan-btn-brands");
const btnAgency = document.querySelector(".slogan-btn-agency");
const btn = document.querySelector(".slogan-wrap-btn");
const tittleWord = document.querySelector(".tittle-word");
btn.addEventListener("click", onBtnClick);

function onBtnClick(e) {
  const btnActive = e.target;
  if (btnActive === btnBrands) {
    btnBrands.classList.add("is-active");
    btnAgency.classList.remove("is-active");
    tittleWord.textContent = "brands";
  } else {
    btnBrands.classList.remove("is-active");
    btnAgency.classList.add("is-active");
    tittleWord.textContent = "agency";
  }
}
