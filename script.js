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
      redButton.textContent = "I'm warming you Don't press me";
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
