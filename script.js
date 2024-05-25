document.getElementById('calculatebtn').addEventListener('click', calculateLoan)

function calculateLoan(){
  let loanAmount = parseFloat(document.getElementById('loanAmountInput').value);
  let interestRate = parseFloat(document.getElementById('interestRateInput').value);
  let loanTerm = parseFloat(document.getElementById('loanTermInput').value);
 
if(isNaN(loanAmount) || isNaN(interestRate) || isNaN(loanTerm)){
  alert('Please enter a valid number')
}

const montlyInterest = interestRate / 100 / 12;
const totalPayment = loanAmount;
const montlyPayment = (loanAmount * montlyInterest)/(1-Math.pow(1+montlyInterest, -totalPayment))
const totalInterest = (montlyPayment * totalPayment) - loanAmount

}