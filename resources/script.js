"use strict";

// For setting the greeting to the visitor

let myDate = new Date();
let hrs = myDate.getHours();

let greet;

if (hrs < 12) greet = "Good Morning";
else if (hrs >= 12 && hrs <= 17) greet = "Good Afternoon";
else if (hrs >= 17 && hrs <= 24) greet = "Good Evening";

document.querySelector(".greeting").innerHTML = greet;

// Real time header clock

function showTime() {
  var date = new Date();
  var h = date.getHours();
  var m = date.getMinutes();
  var s = date.getSeconds();
  var session = "AM";

  if (h == 0) {
    h = 12;
  }

  if (h > 12) {
    h = h - 12;
    session = "PM";
  }

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  var time = h + ":" + m + ":" + s;
  var se = session;
  document.getElementById("DigitalCLOCK").innerText = time;
  document.getElementById("DigitalCLOCK").textContent = time;
  document.getElementById("session").innerText = session;

  setTimeout(showTime, 1000);
}

showTime();

// Time and date widget

function dayNum() {
  let d = new Date();
  let date = d.getDate();
  let day = d.getDay();
  let year = d.getFullYear();

  switch (day) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
      day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
      break;
  }

  document.getElementById("day-num").textContent = date;
  document.getElementById("day").textContent = day;
  document.getElementById("year").textContent = year;
}

dayNum();
