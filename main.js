var timerText, canPlay, leftWin, rightWin;

timerText = document.querySelector('.timer');
newGame = document.querySelector('h1');
leftHand = document.querySelector('.hand_left');
leftHandImg = document.querySelector('.hand_left img')
rightHand = document.querySelector('.hand_right');
rightHandImg = document.querySelector('.hand_right img');

function countdown() {
  canPlay = false;
  leftWin = false;
  rightWin = false;
  leftHandImg.id = null;
  rightHandImg.id = null;
  setTimeout(function() {timerText.textContent = 'ready...'}, 1000, function() {timerText.textContent = 'steady...'}, 1000);
  setTimeout(function() {timerText.textContent = 'steady...'}, 2000);
  setTimeout(function() {timerText.textContent = 'go!'; canPlay = true; console.log(canPlay);}, (Math.floor(Math.random() * 7) + 3) * 1000);
}

function left() {
  if(canPlay && !rightWin) {
    leftWin = true;
    leftHandImg.id = 'winner';
  }
}

function right() {
  if(canPlay && !leftWin){
    rightWin = true;
    rightHandImg.id = 'winner';
  }
}

function checkSpeed() {
  if(canPlay) {
    if(leftWin) {
      timerText.textContent = "left wins!";
    }
    else if (rightWin) {
      timerText.textContent = "right wins!";
    }
  }
}

checkSpeed();
newGame.addEventListener('click', countdown);
leftHand.addEventListener('click', left);
document.addEventListener('keydown', function(event) { if(event.keyCode == 37) {left();}});
rightHand.addEventListener('click', right);
document.addEventListener('keydown', function(event) { if(event.keyCode == 39) {right();}});
