function calculateAge(){
  const today = new Date();
  const birthdateInput = document.getElementById("birthDate").value;
  const birthDateParts = birthdateInput.split("-");

  const birthDay = birthDateParts[0];
  const birthMonth = birthDateParts[1]-1;
  const birthYear = birthDateParts[2];
  const birthDate = new Date(birthYear,birthMonth,birthDay)

console.log(birthdateInput);
console.log(birthDateParts);
console.log(birthDay);
console.log(birthMonth);
console.log(birthYear);



}



const ageCalculatorForm = document.getElementById("ageCalculator");
ageCalculatorForm.addEventListener("submit",(event)=>{
  event.preventDefault();
  calculateAge();
})