var numSquares = 6;
var colors = [];
var goalColor = '';
var clickedSquareColor = "";
var messageDisp = document.getElementById("message");
var squares = document.querySelectorAll(".square");
var resetBtn = document.querySelector("#reset");
var goalColorEl = document.getElementById("goalColor");
var h1 = document.getElementsByTagName('h1');
var h4 = document.getElementsByTagName('h4');
var modeBtns = document.querySelectorAll('.mode');

init();

function init(){
    addModeBtnListeners();
    addsquareBtnListeners();
    reset();
}

function addModeBtnListeners() {
    for(var i=0;i < modeBtns.length; i++) {
        modeBtns[i].addEventListener('click', function(){
            modeBtns[0].classList.remove('selected');
            modeBtns[1].classList.remove('selected');
            this.classList.add('selected');
            if(this.textContent === 'Easy') {
                numSquares = 3;
            } else if (this.textContent === 'Hard') {
                numSquares = 6;
            }
            reset();
        });
    }
}

function addsquareBtnListeners() {
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
        goalColorEl.textContent = goalColor;
        squares[i].addEventListener("click", function() {
            clickedSquareColor = this.style.backgroundColor;
            if(clickedSquareColor === goalColor) {
                messageDisp.textContent = "Yay!!";
                matchSquares();
                h4[0].style.backgroundColor = clickedSquareColor;
                h1[0].style.backgroundColor = clickedSquareColor;
                resetBtn.textContent = 'Play Again?';
            }
            else {
                messageDisp.textContent = "Try Again!!";
                this.style.backgroundColor = "#232323";
            }
        });
    }
}

function matchSquares() {
    for(var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = goalColor;
    }
}

function pickGoalColor() {
    var goalColorIndex = Math.floor(Math.random() * colors.length);
    return colors[goalColorIndex];
}

function generateRandomColors(num) {
    var randomColors = [];
    for (var i=0; i <num; i++) {
        randomColors.push(generateRandomColor());
    }
    return randomColors;
}

function generateRandomColor() {
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);
    return 'rgb(' + red + ', ' + green + ', ' + blue + ')';

}

resetBtn.addEventListener('click', function(){
    reset();
});

function reset() {
    colors = generateRandomColors(numSquares);
    goalColor = pickGoalColor();
    goalColorEl.textContent = goalColor;
    for(var i = 0; i < squares.length; i++) {
        if(colors[i]) {
            squares[i].style.display = 'block';
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = 'none';
        }
    }
    resetBtn.textContent = 'New Colors';
    h4[0].style.backgroundColor = 'steelblue';
    h1[0].style.backgroundColor = 'steelblue';
    messageDisp.textContent = '';
}