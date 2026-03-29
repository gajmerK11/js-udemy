const changedText = document.getElementById("myParagraph");
const btn = document.getElementById("changeTextButton");

const secondBtn = document.getElementById("highlightFirstCity");

const thirdBtn = document.getElementById("changeOrder");

const fourthBtn = document.getElementById("addNewItem");

const fifthBtn = document.getElementById("removeItem");

const originalText = changedText.textContent;

let flag = true;

let colors = ["red", "blue", "green", "yellow"];

btn.addEventListener("click", function () {
  if (flag) {
    changedText.innerHTML = "The text has been changed";
  } else {
    changedText.innerHTML = originalText;
  }
  flag = !flag;
});

let clickCounter = 0;

secondBtn.addEventListener("click", function () {
  const citiesList = document.querySelectorAll("#citiesList li");

  citiesList.forEach((item) => {
    item.style.cssText = "";
  });

  citiesList[clickCounter].style.cssText =
    `background-color: ${colors[clickCounter]}`;

  clickCounter = (clickCounter + 1) % citiesList.length;
});

thirdBtn.addEventListener("click", function () {
  const order = document.querySelector("#coffeeOrder > span");
  if (flag) {
    order.innerHTML = "Espresso";
  } else {
    order.innerHTML = "Latte";
  }
  flag = !flag;
});

fourthBtn.addEventListener("click", function () {
  const newItem = document.getElementById("shoppingList");
  const newLi = document.createElement("li");
  newLi.textContent = "Butter";
  newItem.appendChild(newLi);
});

fifthBtn.addEventListener("click", function () {
  const ul = document.getElementById("shoppingList");
  ul.lastElementChild.remove();
});

document.getElementById("tea").addEventListener("click", function (event) {
  if (event.target && event.target.matches(".teaType")) {
    alert("You selected: " + event.target.textContent);
  }
});

document
  .getElementById("feedbackForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    const feedbackInput = document.getElementById("feedbackInput");
    const value = feedbackInput.value;
    // console.log(value);
    const textDisplay = document.getElementById("feedbackDisplay");
    // textDisplay.innerHTML = value;
    const labelValue = document.querySelector(
      "#feedbackForm > label",
    ).innerHTML;
    textDisplay.innerHTML = `${labelValue} ${value}`;
  });

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("domStatus").textContent = "DOM Loaded";
});
