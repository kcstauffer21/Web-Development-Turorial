var colors = generateRandomColors(6)
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById('colorDisplay');
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector('h1');
var resetButton = document.getElementById("reset");
// var pageBackgroundColor = document.getElementById('test').style.backgroundColor;

resetButton.addEventListener('click', function () {
  colors = generateRandomColors(6)
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for (i=0; i < squares.length; i++){
    squares[i].style.backgroundColor = colors[i];
  }
})

colorDisplay.textContent = pickedColor

for(var i = 0; i < squares.length; i++){
  squares[i].style.backgroundColor = colors[i];

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
