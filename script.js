document.getElementById('calculatebtn').addEventListener('click', calculateLoan);

function calculateLoan() {
  let loanAmount = parseFloat(document.getElementById('loanAmountInput').value);
  let interestRate = parseFloat(document.getElementById('interestRateInput').value);
  let loanTerm = parseFloat(document.getElementById('loanTermInput').value);

  if (isNaN(loanAmount) || isNaN(interestRate) || isNaN(loanTerm)) {
    alert('Please enter a valid number');
    return;
  }

  const monthlyInterest = interestRate / 100 / 12;
  const totalPayment = loanAmount;
  const monthlyPayment = (loanAmount * monthlyInterest) / (1 - Math.pow(1 + monthlyInterest, -loanTerm));
  const totalInterest = (monthlyPayment * loanTerm) - loanAmount;

  displayResult(monthlyPayment, totalInterest);
}

function displayResult(monthlyPayment, totalInterest) {
  const resultDiv = document.getElementById('result');
  resultDiv.innerHTML = `
    <p><strong>Monthly Payment: ${monthlyPayment.toFixed(2)}</strong></p>
    <p><strong>Monthly Interest: ${totalInterest.toFixed(2)}</strong></p>
  `;
}
