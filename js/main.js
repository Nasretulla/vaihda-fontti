let fontSize = 16;
let showFont = document.querySelectorAll(".showFont");
let currentIndex = 0;
let currentSize = 16;

function myFunction() {
  currentSize += 4;
  if (currentSize > 32) {
    currentSize = 16;
  }

  showFont[currentIndex].style.fontSize = currentSize + "px";
  currentIndex += 1;

  document.getElementById("nyt").textContent =
    "Fontinkoko nyt  " + currentSize + "px";
}

// ****************** This one for changing font

document.addEventListener("DOMContentLoaded", function () {
  var fontFamilies = [
    "Roboto",
    "Mansalva",
    "Grenze",
    "'Turret Road'",
    "'Courier New'",
  ];
  var currentFontIndex = 0;

  function changeFont() {
    var paragraphId = "fontChange" + currentFontIndex;
    var paragraph = document.getElementById(paragraphId);

    paragraph.style.fontFamily = fontFamilies[currentFontIndex];

    document.getElementById("nykyFontti").textContent =
      "Fontti on nyt:  " + fontFamilies[currentFontIndex];

    currentFontIndex = (currentFontIndex + 1) % fontFamilies.length;
  }

  var fontButton = document.getElementById("fontStylebtn");
  fontButton.addEventListener("click", changeFont);
});
