function detectChar(){

const input = document.getElementById('inputType').value;

if(input){

const uniCodeValue =input.charCodeAt(0);
const result = `The Unicode Value of ${input} is ${uniCodeValue}`;

}

}