/* Created by Tivotal */

let generateBtn = document.querySelector(".generate-btn");
let colorBox = document.querySelector(".color-box");
let colorCode = document.querySelector(".code");
let copyBtn = document.querySelector(".copy-btn");

function generateColor() {
  let randomHex = Math.floor(Math.random() * 0xffffff).toString(16);

  //adding # to hex value
  randomHex = `#${randomHex.padStart(6, "0")}`;
  //padstart will add 0 to make sure that hex value length is 6
  console.log(randomHex);

  colorBox.style.background = randomHex;
  colorCode.textContent = randomHex;
}

copyBtn.addEventListener("click", () => {
  navigator.clipboard.writeText(colorCode.textContent);

  copyBtn.innerText = "Copied!";
  copyBtn.style.color = "green";

  setTimeout(() => {
    copyBtn.innerText = "Copy";
    copyBtn.style.color = "#4070f4";
  }, 1000);
});

generateBtn.addEventListener("click", generateColor);
generateColor();
