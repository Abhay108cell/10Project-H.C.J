const redSlider = document.getElementById('redSlider')
const greenSlider = document.getElementById('greenSlider')
const blueSlider = document.getElementById('blueSlider')

const redValueSpan = document.getElementById('redValue');
const greenValueSpan = document.getElementById('greenValue');
const blueValueSpan = document.getElementById('blueValue');


const colorBox =document.getElementById('color-box');
const copyButton = document.getElementById('copyButton');
const InputTypeRGBValue = document.getElementById('inputType');


redSlider.addEventListener('click',updateColor);
greenSlider.addEventListener('click',updateColor);
blueSlider.addEventListener('click',updateColor);
copyButton.addEventListener('click',copyRGBColor);

function updateColor(){

}

function copyRGBColor(){

}