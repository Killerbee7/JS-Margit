const startButton = document.querySelector("#startgame");
const stopButton = document.querySelector("#stopgame");
const clickBox = document.querySelectorAll(".click");
const result = document.querySelector("#score");
//overlay area
const overlayScore = document.querySelector("#overlayScore");
const closeButton = document.querySelector("#home");
const overlay = document.querySelector(".overlay");
//Sound inputs
const startSound = document.querySelector("#startsound");
const startSound1 = document.querySelector("#startsound1");
const stopSound = document.querySelector("#stopsound");
const stopSound2 = document.querySelector("#stopsound2");
//round(lives)
const livesRemain = document.querySelector("#live");

let active = 0;
let scores = 0;
let timer = 0;
let pace = 1000;
let round = 0;

const randOrder = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

clickBox.forEach((click, i) => {
  click.addEventListener("click", () => clickCount(i));
});

const clickCount = (i) => {
  if (i !== active) {
    round++;
    if (round >= 4) {
      return stopgame();
    }
    livesRemain.textContent = 4 - round;
  } else {
    scores++;
    round--;

    result.textContent = scores;
  }
  overlayScore.textContent = scores;
};

const startgame = () => {
  startSound1.play();

  if (round >= 3) {
    stopgame();
  }
  let nextActive = pickNew(active);
  clickBox[nextActive].classList.toggle("active");
  clickBox[active].classList.remove("active");

  active = nextActive;
  console.log(active);
  timer = setTimeout(startgame, pace);
  pace = pace - 10;
  round++;
  timer++;
  livesRemain.textContent = 4 - round;

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
  stopSound2.play();
  startSound1.pause();
  stopSound.play();
  overlay.style.visibility = "visible";
  clearTimeout(timer);
  livesRemain.textContent = 0;
  clickBox.style.pointerEvents = "none";
};

resetGame = () => {
  window.location.reload();
};

const hideStop = () => {
  stopButton.style.display = "block";
  startButton.style.display = "none";
};

startButton.addEventListener("click", startgame);
startButton.addEventListener("click", hideStop);
stopButton.addEventListener("click", stopgame);
closeButton.addEventListener("click", resetGame);
