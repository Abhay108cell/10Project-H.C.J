function isPalindrome(str){

  const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g,'')
  console.log(cleanStr);
  const reversedStr = cleanStr.split('').reverse().join('');
  console.log(reversedStr);
 
return cleanStr === reversedStr;

}

function palindromeChecker(){

const inputText =document.getElementById('inputText')
const inputResult =document.getElementById('result')

if(isPalindrome(inputText.value)){
  
}

}

document.getElementById('checkButton').addEventListener('click',palindromeChecker)