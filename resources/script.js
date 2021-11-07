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

  var time = "Its " + h + ":" + m + ":" + s + " " + session;
  document.getElementById("DigitalCLOCK").innerText = time;
  document.getElementById("DigitalCLOCK").textContent = time;

  setTimeout(showTime, 1000);
}

showTime();
