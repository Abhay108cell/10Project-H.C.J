const redSlider = document.getElementById('redSlider')
const greenSlider = document.getElementById('greenSlider')
const blueSlider = document.getElementById('blueSlider')

const redValueSpan = document.getElementById('redValue');
const greenValueSpan = document.getElementById('greenValue');
const blueValueSpan = document.getElementById('blueValue');


const colorBox =document.getElementById('color-box');
const copyButton = document.getElementById('copyButton');
const InputTypeRGBValue = document.getElementById('inputType');


redSlider.addEventListener('input',updateColor);
greenSlider.addEventListener('input',updateColor);
blueSlider.addEventListener('input',updateColor);
copyButton.addEventListener('click',copyRGBColor);

function updateColor(){
    const redValue = redSlider.value;
    const greenValue = greenSlider.value;
    const blueValue = blueSlider.value;

    // console.log(redValue,greenValue,blueValue);

    const rgbColor = `rgb(${redValue}, ${greenValue}, ${blueValue})`
    // console.log(rgbColor);

    colorBox.style.background = rgbColor;

    redValueSpan.textContent = redValue;
    greenValueSpan.textContent = greenValue;
    blueValueSpan.textContent = blueValue;

    InputTypeRGBValue.textContent = rgbColor;
}
//  updateColor();

function copyRGBColor(){
     
  const redValue = redSlider.value;
  const greenValue = greenSlider.value;
  const blueValue = blueSlider.value;


  const rgbColor = `rgb(${redValue}, ${greenValue}, ${blueValue})`;

  navigator.clipboard.writeText(rgbColor)
  .then(()=>{
       alert("RGB Color Value Copied to Clipboard:" + rgbColor)
  })
.catch((error)=>{
  console.error("Failed to Copy RGB  Values", error);
})
}