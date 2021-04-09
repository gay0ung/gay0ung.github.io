const backgroundForm = document.querySelector(".random-img")

const IMG_NUMBER = 9;


function paintImage(imgNum){
  const image = new Image();
  image.src = `src/images/${imgNum + 1 }.jpg`
  backgroundForm.appendChild(image)
  image.classList.add('bgImage')
}

function genRandom(){
  const number = Math.floor(Math.random() * IMG_NUMBER )
  return number
}

function init(){
  const randomNumber = genRandom()
  paintImage(randomNumber)
}
init()