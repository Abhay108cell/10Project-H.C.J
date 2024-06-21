function calculateAge(){
  const today = new Date();
  const birthdateInput = document.getElementById("birthDate").value;
  const birthDateParts = birthdateInput.split("-")

console.log(birthdateInput);
console.log(birthDateParts);

}



const ageCalculatorForm = document.getElementById("ageCalculator");
ageCalculatorForm.addEventListener("submit",(event)=>{
  event.preventDefault();
  calculateAge();
})