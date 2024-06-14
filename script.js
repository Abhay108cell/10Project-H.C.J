let dateContainer = document.querySelector(".date-container");
let hoursContainer = document.querySelector(".hours");
let minutesContainer = document.querySelector(".minutes");
let secondsContainer = document.querySelector(".seconds");

const weekDays =[
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];



function formatTime(){
  return time < 10 ? "0" + time : time;
}

function updateClock(){
  const today = new Date();
 
  let date = today.getDate();

  let day = weekDays[today.getDay()]

  let month = monthNames[today.getMonth()]

  console.log(day,month);
  console.log(today.getDay(),today.getMonth());

let hours = formatTime(today.getHours());
}
updateClock();
