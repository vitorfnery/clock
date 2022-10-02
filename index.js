"use strict";

const hourEl = document.querySelector(".hour");
const minuteEl = document.querySelector(".minute");
const secondEl = document.querySelector(".second");

// Original version: everything in one function

const updateClock = function () {
  const currDate = new Date();
  //   setTimeout(updateClock, 1000);
  const hour = currDate.getHours();
  const minute = currDate.getMinutes();
  const second = currDate.getSeconds();
  const hourDeg = (hour / 12) * 360;
  hourEl.style.transform = `rotate(${hourDeg}deg)`;
  const minuteDeg = (minute / 12) * 360;
  minuteEl.style.transform = `rotate(${minuteDeg}deg)`;
  const secondDeg = (second / 12) * 360;
  secondEl.style.transform = `rotate(${secondDeg}deg)`;
};

// updateClock();
setInterval(updateClock, 1000);
