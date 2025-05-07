

let dateSelector = document.querySelector("#date");
let daySelector = document.querySelector("#day");
let monthSelector = document.querySelector("#month");
let yearSelector = document.querySelector("#year");
let date = new Date();



dateSelector.innerHTML = date.getDate()
const months = [
  "January",
  "Febraury",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const month = months[date.getMonth()];
monthSelector.innerHTML = month;


const days = [  
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",

];
const day = days[date.getDay()]
daySelector.innerHTML = day



yearSelector.innerHTML = date.getFullYear();
