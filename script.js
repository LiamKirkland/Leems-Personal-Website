const pcaSlider = document.getElementById("pcaSlider");

let imgIndex = 0;

function nextImg() {
  switch (imgIndex) {
    case 0:
      pcaSlider.src = "./assets/images/testImg1.jpg";
      imgIndex++;
      break;
    case 1:
      pcaSlider.src = "./assets/images/testImg2.jpg";
      imgIndex++;
      break;
    case 2:
      pcaSlider.src = "./assets/images/testImg3.jpg";
      imgIndex++;
      break;
    case 3:
      pcaSlider.src = "./assets/images/PCA2026.jpg";
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
      redButton.textContent = "Haha funny. But seriously don't click me";
      buttonState++;
      break;
    case 1:
      redButton.textContent = "Dude, stop";
      buttonState++;
      break;
    case 2:
      redButton.textContent = "I'm warming you! Don't press me!";
      buttonState++;
      break;
    case 3:
      redButton.textContent = "Last chance to look at me, Hector...";
      buttonState++;
      break;
    case 4:
      redButton.disabled = true;
      boomBox.currentTime = 0;
      boomBox.play();
      boomBox.addEventListener("ended", () => {
        redButton.disabled = false;
        redButton.textContent = "Don't click me";
      });
      buttonState = 0;
      break;
  }
}

redButton.addEventListener("click", buttonAction);
