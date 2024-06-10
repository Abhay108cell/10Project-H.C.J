function calculateTip(){

const billAmountInput = document.getElementById("billAmount");
const serviceRatingSelect = document.getElementById("serviceRating");
const splitCountInput = document.getElementById("splitCount");
const mealTypeSelect = document.getElementById("mealType");

const tipAmountOutput = document.getElementById("tipAmount");
const totalAmountOutput = document.getElementById("totalAmount");
const amountPerPersonOutput = document.getElementById("amountPerPerson");

const billAmount = parseFloat(billAmountInput.value);
const serviceRating = parseFloat(serviceRatingSelect.value);
const splitCount = parseInt(splitCountInput.value);
const mealType = mealTypeSelect.value;


if(isNaN(billAmount) || isNaN(serviceRating) || isNaN(splitCount)){
  tipAmountOutput.textContent = "Please Enter Valid Number";
  totalAmountOutput.textContent = "";
  amountPerPersonOutput.textContent = "";
  return;
}

}



document.getElementById('calculateBtn').addEventListener("click", calculateTip)