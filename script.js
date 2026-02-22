/*
    I'll admit, this is not really formatted or organized properly at all. 
    I sorta just built out the random ideas I had as I thought of em.
*/

const pcaSlider = document.getElementById("pcaSlider");

let imgIndex = 0;

function nextImg() {
  switch (imgIndex) {
    case 0:
      pcaSlider.src = "./assets/images/pcaSlide2.jpg";
      imgIndex++;
      break;
    case 1:
      pcaSlider.src = "./assets/images/pcaSlide3.jpg";
      imgIndex++;
      break;
    case 2:
      pcaSlider.src = "./assets/images/pcaSlide4.jpg";
      imgIndex++;
      break;
    case 3:
      pcaSlider.src = "./assets/images/pcaSlide5.png";
      imgIndex++;
      break;
    case 4:
      pcaSlider.src = "./assets/images/pcaSlide1.jpg";
      imgIndex = 0;
      break;
  }
}

pcaSlider.addEventListener("click", nextImg);

const redButton = document.getElementById("doNotPress");
const boomBox = document.getElementById("overlayAnim");

let buttonState = 0;

function buttonAction() {
  switch (buttonState) {
    case 0:
      redButton.textContent = "Haha very funny Now cut it out";
      buttonState++;
      break;
    case 1:
      redButton.textContent = "Seriously stop it";
      buttonState++;
      break;
    case 2:
      redButton.textContent = "Dude stop";
      buttonState++;
      break;
    case 3:
      redButton.textContent = "I'm warning you Don't press me";
      buttonState++;
      break;
    case 4:
      redButton.textContent = "Last chance to look at me Hector...";
      buttonState++;
      break;
    case 5:
      redButton.disabled = true;
      redButton.style.backgroundColor = "rgb(204, 0, 0)";
      boomBox.currentTime = 0;
      boomBox.play();
      setTimeout(() => {
        redButton.textContent = "Don't click me";
      }, 250);
      boomBox.addEventListener("ended", () => {
        redButton.disabled = false;
        redButton.style.backgroundColor = "red";
      });
      buttonState = 0;
      break;
  }
}

redButton.addEventListener("click", buttonAction);

/*
    There is DEFINITELY an easier way to build this out. I tried as best as I could to work out all of the logic by myself.
    This was honetsly a lot harder than I thought it would be going into it, 
    but I'm quite pleased with myself for figuring SOMETHING out... even if it's likely that it's horrifically inefficient
*/
const playerArea = document.getElementById("playerArea");
const gameArea = document.getElementById("gameArea");
let gameStarted = 0;

for (i = 0; i < 9; i++) {
  const button = document.createElement("button");

  button.id = `playerButton${i}`;
  button.className = "playerButtons";
  button.addEventListener("click", playTTT);
  button.textContent = "X";
  playerArea.appendChild(button);
}

for (i = 0; i < 9; i++) {
  const playSpace = document.createElement("div");

  playSpace.id = `playSpace${i}`;
  playSpace.className = "playSpaces";
  playSpace.textContent = `${i}`;

  gameArea.appendChild(playSpace);
}

let staticPlayerButtons = [...document.getElementsByClassName("playerButtons")];
let staticPlaySpaces = [...document.getElementsByClassName("playSpaces")];
let playerButtons = [...document.getElementsByClassName("playerButtons")];
let playSpaces = [...document.getElementsByClassName("playSpaces")];

let playersSpaces = [];
let cpuSpaces = [];

//got this from stackoverflow lol
function containsAll(arr1, arr2) {
  return arr1.every((i) => arr2.includes(i));
}

function checkWin(spaces) {
  //this is ugly but I couldn't figure out how to use a switch statement here
  console.log(spaces);
  if (
    containsAll([0, 1, 2], spaces) ||
    containsAll([0, 3, 6], spaces) ||
    containsAll([0, 4, 8], spaces) ||
    containsAll([1, 4, 7], spaces) ||
    containsAll([2, 5, 8], spaces) ||
    containsAll([3, 4, 5], spaces) ||
    containsAll([6, 7, 8], spaces) ||
    containsAll([2, 4, 6], spaces)
  ) {
    return true;
  } else {
    return false;
  }
}
//another stackoverflow grab
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function cpuTurn() {
  const rand = getRandomInt(0, playerButtons.length - 1);

  playSpaces[rand].style.color = "#c2fe0b";
  playSpaces[rand].textContent = "O";

  cpuSpaces.push(staticPlayerButtons.indexOf(playerButtons[rand]));
  playSpaces.splice(rand, 1);
  playerButtons[rand].disabled = true;
  playerButtons[rand].textContent = "O";
  playerButtons[rand].style.color = "#c2fe0b";
  playerButtons.splice(rand, 1);

  if (checkWin(cpuSpaces)) {
    document.querySelector("#gameArea > p").textContent = "You Lose :(";
    document.querySelector("#playerArea > p").textContent =
      "Click any button to restart the game";
    gameStarted = 2;
    staticPlayerButtons.forEach((i) => {
      i.disabled = false;
    });
  } else {
    playerButtons.forEach((i) => {
      i.disabled = false;
    });
    document.querySelector("#playerArea > p").textContent = "Your Turn";
  }
}
/*
    This may look weird, but I couldn't figure out a way to reset the board without using inline styling, 
    which overwrote the hover styling. Probably a skill issue
*/
function resetBoard() {
  staticPlayerButtons.forEach((i) => {
    i.remove();
  });
  staticPlaySpaces.forEach((i) => {
    i.remove();
  });

  for (i = 0; i < 9; i++) {
    const button = document.createElement("button");

    button.id = `playerButton${i}`;
    button.className = "playerButtons";
    button.addEventListener("click", playTTT);
    button.textContent = "X";
    playerArea.appendChild(button);
  }

  for (i = 0; i < 9; i++) {
    const playSpace = document.createElement("div");

    playSpace.id = `playSpace${i}`;
    playSpace.className = "playSpaces";
    playSpace.textContent = `${i}`;

    gameArea.appendChild(playSpace);
  }

  staticPlayerButtons = [...document.getElementsByClassName("playerButtons")];
  staticPlaySpaces = [...document.getElementsByClassName("playSpaces")];
  playerButtons = [...document.getElementsByClassName("playerButtons")];
  playSpaces = [...document.getElementsByClassName("playSpaces")];

  document.querySelector("#gameArea > p").textContent = "- Tic-Tac-Toe -";
  document.querySelector("#playerArea > p").textContent = "Your Turn";
}

function playTTT() {
  if (gameStarted == 0) {
    document.querySelector("#gameArea > p").textContent = "- Tic-Tac-Toe -";
    gameStarted = 1;
  }
  if (gameStarted == 2) {
    resetBoard();
    playerButtons = [...document.getElementsByClassName("playerButtons")];
    playSpaces = [...document.getElementsByClassName("playSpaces")];
    playersSpaces = [];
    cpuSpaces = [];
    gameStarted = 0;
  } else {
    let clickedButton = document.getElementById(this.id);
    console.log(playSpaces[playerButtons.indexOf(clickedButton)]);

    playSpaces[playerButtons.indexOf(clickedButton)].style.color = "#c2fe0b";
    playSpaces[playerButtons.indexOf(clickedButton)].textContent = "X";

    playSpaces.splice(playerButtons.indexOf(clickedButton), 1);
    playerButtons.splice(playerButtons.indexOf(clickedButton), 1);
    playersSpaces.push(staticPlayerButtons.indexOf(clickedButton));
    this.disabled = true;
    this.textContent = "X";
    this.style.color = "#c2fe0b";

    if (checkWin(playersSpaces)) {
      document.querySelector("#gameArea > p").textContent = "You Win!";
      document.querySelector("#playerArea > p").textContent =
        "Click any button to restart the game";
      gameStarted = 2;
      staticPlayerButtons.forEach((i) => {
        i.disabled = false;
      });
    } else {
      document.querySelector("#playerArea > p").textContent = "CPU's Turn";
      staticPlayerButtons.forEach((i) => {
        i.disabled = true;
      });
      setTimeout(() => {
        cpuTurn();
      }, 1650);
    }
  }
}
