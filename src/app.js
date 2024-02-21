/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
//
//
window.onload = function() {
  testFunction();
}; // Calls the function testFunction everytime the page is reloaded/loaded.
let testFunction = () => {
  let num = document.querySelector(".middleNumber");
  let middleNumber = [2, 3, 4, 5, 6, 7, 8, 9, 10, "K", "Q", "J", "A"];
  let randomCardNum = Math.floor(Math.random() * 13);
  let suit = ["&#9830", "&#9829", "&#9824", "&#9827"];
  let suitNum = Math.floor(Math.random() * 4);
  let topLeft = document.querySelector(".topLeftSuit");
  let bottomRight = document.querySelector(".bottomRightSuit");
  topLeft.innerHTML = suit[suitNum];
  bottomRight.innerHTML = suit[suitNum];
  if (suitNum == 0 || suitNum == 1) {
    topLeft.style.color = "red";
    bottomRight.style.color = "red";
    num.style.color = "red";
  } else {
    topLeft.style.color = "black";
    bottomRight.style.color = "black";
    num.style.color = "black";
  }
  document.querySelector(".middleNumber").innerHTML =
    middleNumber[randomCardNum];
};
let newBtn = document.querySelector("#newCard");
newBtn.addEventListener("click", testFunction); // Calls the testFunction everytime the "#newCard" button is clicked.
//
setInterval(testFunction, 10000); // Calls the testFunction every 10 seconds.
