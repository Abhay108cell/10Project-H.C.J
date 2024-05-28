document.getElementById('incrementbtn').addEventListener("click", incrementCounter);

document.getElementById('decrementbtn').addEventListener("click", decrementCounter);

document.getElementById('resetbtn').addEventListener("click", resetCounter);

let counterDisplay = document.getElementById('counterDisplay');
let countervalue = 0;


function updateCounterDisplay(){
  counterDisplay.textContent = countervalue;
}


function incrementCounter(){
countervalue++;
updateCounterDisplay();
}

function decrementCounter(){
countervalue--;
updateCounterDisplay();
}

function resetCounter(){
countervalue = 0;
updateCounterDisplay()
}