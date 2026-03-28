const changedText = document.getElementById("myParagraph");
const btn = document.getElementById("changeTextButton");

const secondBtn = document.getElementById("highlightFirstCity");

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
