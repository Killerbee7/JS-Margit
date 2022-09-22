const startButton = document.querySelector("#startgame");
const stopButton = document.querySelector("#stopgame");
const clickBox = document.querySelectorAll(".click");
const result = document.querySelector("#score");
const closeButton = document.querySelector("#home");
const overlay=document.querySelector('.overlay')

let active = 0;
let scores = 0;
let timer = 0;

const randOrder = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

clickBox.forEach((click, i) => {
  click.addEventListener("click", () => clickCount(i));
});

const clickCount = (i) => {
  if (i !== active) {
    stopgame();
  } else {
    scores++;
    result.textContent = scores;
  }
};

const startgame = () => {
  let nextActive = pickNew(active);

  clickBox[nextActive].classList.toggle('active');
  clickBox[active].classList.remove('active');

  active = nextActive;
  console.log(active);
  timer = setTimeout(startgame, 1000);

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
  console.log(stopgame);
  clearTimeout(timer);
};

resetGame = () => {
  window.location.reload();
};

startButton.addEventListener("click", startgame);
stopButton.addEventListener("click", stopgame);
closeButton.addEventListener("click", resetGame);
