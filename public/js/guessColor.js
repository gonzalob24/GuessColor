var backgndColor = "#2c3e50";
var gameSquares = 6;
var colorsArray = [];
var winningColor;
var btnsArray = document.getElementsByClassName("buttons");
var modeBtns = document.querySelectorAll(".mode");
var displayRGB = document.getElementById("rgb-num");
var h1 = document.getElementsByTagName("header")[0];
var gameButton = document.querySelector(".game-button");
var message = document.getElementById('gameResult');


init()

function init() {
    setGameMode();
    selectGameSquares();
    resetGame();
}

function setGameMode() {
    for (var i = 0; i < modeBtns.length; i++) {
        modeBtns[i].addEventListener('click', function () {
            modeBtns[0].classList.remove("active");
            modeBtns[1].classList.remove("active");
            this.classList.add("active");
            if (this.textContent === "Easy") {
                gameSquares = 3;
            } else {
                gameSquares = 6;
            }
            resetGame()
        });
    }
}

function resetGame() {
    gameButton.innerHTML = "New Colors";
    h1.style.backgroundColor = backgndColor;
    message.textContent = "";
    // Generate new colors
    colorsArray = randomColorGenerator(gameSquares);
    // pick a new color from colors array
    winningColor = selectColor();
    // set new RGB to display
    displayRGB.innerHTML = winningColor;
    // update colors un UI
    for (let i = 0; i < btnsArray.length; i++) {
        if (colorsArray[i]) {
            btnsArray[i].style.backgroundColor = colorsArray[i];
            btnsArray[i].style.display = "inline-block";
        } else {
            btnsArray[i].style.display = "none";
        }
    }
}

function selectGameSquares() {
    Array.from(btnsArray).forEach(function (button, index) {
        // add event handlers to buttons to get color
        button.addEventListener('click', function () {
            var clickedColor = this.style.backgroundColor;
            if (clickedColor === winningColor) {
                message.textContent = 'Correct';
                updateColors(clickedColor);
                h1.style.backgroundColor = winningColor;
                gameButton.innerHTML = "Play Again?";
            } else {
                message.textContent = 'Try again';
                this.style.backgroundColor = backgndColor;
            }
        })
    });
}

gameButton.addEventListener('click', function () {
    resetGame();
});

function updateColors(rgbColor) {
    for (let i = 0; i < btnsArray.length; i++) {
        btnsArray[i].style.backgroundColor = rgbColor;
    }
}

function selectColor() {
    var randomNumber = Math.floor(Math.random() * colorsArray.length);
    return colorsArray[randomNumber];
}

function randomColorGenerator(num) {
    var arr = []
    for (let i = 0; i < num; i++) {
        arr[i] = randomRGB();
    }
    return arr;
}

function randomRGB() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}