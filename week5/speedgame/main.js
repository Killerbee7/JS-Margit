const startButton = document.querySelector("#startgame");
const stopButton = document.querySelector("#stopgame");
const clickBox = document.querySelectorAll(".click");
const result = document.querySelector("#score");
const overlayScore=document.querySelector('#overlayScore');
const closeButton = document.querySelector("#home");
const overlay=document.querySelector('.overlay')

let active = 0;
let scores = 0;
let timer = 0;
let pace=1000;
let round=0;




const randOrder = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

clickBox.forEach((click, i) => {
  click.addEventListener("click", () => clickCount(i));
});

const clickCount = (i) => {
  if (i !== active) {
    stopgame();
  }
  else {
    scores++;
    round--;
    result.textContent = scores;
  }
  overlayScore.textContent=scores;
};

const startgame = () => {

  startSound=new sound()
  if(round>=3){
    stopgame();
  }
  let nextActive = pickNew(active);
  clickBox[nextActive].classList.toggle('active');
  clickBox[active].classList.remove('active');

  active = nextActive;
  console.log(active);
  timer = setTimeout(startgame, 1000);
  pace=pace-500;
  round++;

  
  

  function pickNew(active) {
    let nextActive = randOrder(0, 3);

    if (nextActive != active) {
      return nextActive;
    } else {
      return pickNew(active);
    }
  }

};


const stopgame = () => {
  overlay.style.visibility = "visible";
  clearTimeout(timer);
};

resetGame = () => {
  window.location.reload();
};

const hideStop=()=>{
  stopButton.style.display="block"
  startButton.style.display="none"
};




startButton.addEventListener("click", startgame);
startButton.addEventListener("click", hideStop);
stopButton.addEventListener("click", stopgame);
closeButton.addEventListener("click", resetGame);

