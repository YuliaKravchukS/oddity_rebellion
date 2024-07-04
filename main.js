'use strict'

const btnLucky = document.querySelector('.btn-lucky');
const logo = document.querySelector('.logo');
btnLucky.addEventListener('click', onBtnClick);

function onBtnClick() {
   logo.alt='Oddity'
   logo.src='https://image.cnbcfm.com/api/v1/image/107200429-1677524943053-Screen_Shot_2022-09-15_at_115135_AM.png?v=1689776971&w=740&h=416&ffmt=webp&vtcrop=y'
}
