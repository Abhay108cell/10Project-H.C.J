function calculateAge(){
  const today = new Date();
  const birthdateInput = document.getElementById("birthDate");
}



const ageCalculatorForm = document.getElementById("ageCalculator");
ageCalculatorForm.addEventListener("submit",(event)=>{
  event.preventDefault();
  calculateAge();
})