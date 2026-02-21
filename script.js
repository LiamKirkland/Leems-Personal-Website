const pcaSlider = document.getElementById("pcaSlider");

let imgIndex = 0;

function nextImg(){
    switch(imgIndex) {
        case 0:
            pcaSlider.src = "./assets/images/testImg1.jpg"
            imgIndex++
            break;
        case 1:
            pcaSlider.src = "./assets/images/testImg2.jpg"
            imgIndex++
            break;
        case 2:
            pcaSlider.src = "./assets/images/testImg3.jpg"
            imgIndex++
            break;
        case 3:
            pcaSlider.src = "./assets/images/PCA2026.jpg"
            imgIndex = 0
            break;
    }
}

pcaSlider.addEventListener("click", nextImg);