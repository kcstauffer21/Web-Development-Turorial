numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");

var colorDisplay = document.getElementById('colorDisplay');
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector('h1');
var resetButton = document.getElementById("reset");
var modeButtons = document.querySelectorAll(".mode");
// var pageBackgroundColor = document.getElementById('test').style.backgroundColor;

init();
function init() {
  setupModeButtons();
  setupSquares();
  reset();
}

function setupModeButtons() {
  for(var i = 0; i < modeButtons.length; i++){
  modeButtons[i].addEventListener("click", function () {
    modeButtons[0].classList.remove("selected");
    modeButtons[1].classList.remove("selected");
    this.classList.add("selected");
    this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
    reset();

  });
}
}

function setupSquares() {
  for(var i = 0; i < squares.length; i++){
        squares[i].addEventListener("click", function () {
    var clickedColor = this.style.backgroundColor;

    if(clickedColor === pickedColor){
      messageDisplay.textContent = "Correct";
      changeColors(clickedColor)
      h1.style.backgroundColor = clickedColor;
      resetButton.textContent = "Play Again"
    } else {
      this.style.backgroundColor = "#232323";
      messageDisplay.textContent = "Try Again";
    }
  })

}
}

function reset(){
  colors = generateRandomColors(numSquares)
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  resetButton.textContent = "New Colors";
  messageDisplay.textContent = "";

  for (i=0; i < squares.length; i++){
    if (colors[i]){
      squares[i].style.display = "block";
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = "none";
    }

  }
  h1.style.backgroundColor = "steelblue";
}

resetButton.addEventListener('click', function () {
  reset();
});

colorDisplay.textContent = pickedColor



function changeColors(color) {
  for (var i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor = color;
  }
}

function pickColor() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random]
}

function generateRandomColors(inputNumColors) {
  var arrColors = []
  for (i=0; i < inputNumColors; i++){
    arrColors.push(randomColors())
  }
  return arrColors
}

function randomColors() {
  //Generating random red color
  var r = Math.floor(Math.random() * 256);
  //Generating random green color
  var g = Math.floor(Math.random() * 256);
  //Generating random blue color
  var b = Math.floor(Math.random() * 256);

  return "rgb(" + r + ', ' + g + ", " + b + ")";
}
