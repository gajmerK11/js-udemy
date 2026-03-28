const changedText = document.getElementById("myParagraph");
const btn = document.getElementById("changeTextButton");

const originalText = changedText.textContent;

let flag = true;

btn.addEventListener("click", function () {
  if (flag) {
    changedText.innerHTML = "The text has been changed";
  } else {
    changedText.innerHTML = originalText;
  }
  flag = !flag;
});
