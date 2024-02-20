/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
//
//
window.onload = function() {
  console.log("everything starts with a Hello World :)");
  document.querySelector(".middleNumber").innerHTML =
    middleNumber[randomCardNum];
  suitGenerator();
};
let middleNumber = [2, 3, 4, 5, 6, 7, 8, 9, 10, "K", "Q", "J", "A"];
let randomCardNum = Math.floor(Math.random() * 13);
//
let suit = ["&#9830", "&#9829", "&#9824", "&#9827"];
let suitNum = Math.floor(Math.random() * 4);
var topLeft = document.querySelector(".topLeftSuit");
var bottomRight = document.querySelector(".bottomRightSuit");

let suitGenerator = () => {
  if (suitNum == 0) {
    topLeft.innerHTML = suit[suitNum];
    topLeft.style.color = "red";
    bottomRight.innerHTML = suit[suitNum];
    bottomRight.style.color = "red";
  } else if (suitNum == 1) {
    topLeft.innerHTML = suit[suitNum];
    topLeft.style.color = "red";
    bottomRight.innerHTML = suit[suitNum];
    bottomRight.style.color = "red";
  } else if (suitNum == 2) {
    topLeft.innerHTML = suit[suitNum];
    topLeft.style.color = "black";
    bottomRight.innerHTML = suit[suitNum];
    bottomRight.style.color = "black";
  } else if (suitNum == 3) {
    topLeft.innerHTML = suit[suitNum];
    topLeft.style.color = "black";
    bottomRight.innerHTML = suit[suitNum];
    bottomRight.style.color = "black";
  }
};
