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

// const isValidDate = (date) =>{
//   return(
//     Object.prototype.toString.call(date) === ["object Date"] && !isNaN(date)
// );
// }
if(!isValidDate(birthDate)){
  alert("Invaild Date Format : please Enter a valid Date in DD-MM-YYYY Format.")
}

const ageInMiliSeconds = today - birthDate;
const ageInSeconds = Math.floor(ageInMiliSeconds/1000);
const ageInMinutes = Math.floor(ageInSeconds/60);
const ageInHours = Math.floor(ageInMinutes/60);
const ageInDays = Math.floor(ageInHours/24);
const ageInWeeks= Math.floor(ageInDays/7);
const ageInMonth = Math.floor(ageInDays/30.436875);
const ageInYears = Math.floor(ageInDays/365.25);







}



const ageCalculatorForm = document.getElementById("ageCalculator");
ageCalculatorForm.addEventListener("submit",(event)=>{
  event.preventDefault();
  calculateAge();
})