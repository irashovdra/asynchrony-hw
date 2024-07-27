const startButton = document.querySelector(".start-btn");
const gameArea = document.querySelector(".game-area");
const scoreDisplay = document.querySelector(".score");
const timeDisplay = document.querySelector(".time");
const targetButton = document.querySelector(".target");

let score = 0;
let timeLeft = 30;
let gameInterval;

startButton.addEventListener("click", () => {
  score = 0;
  timeLeft = 30;
  scoreDisplay.textContent = `Очки: ${score}`;
  timeDisplay.textContent = `Час: ${timeLeft}`;
  gameArea.classList.remove("hidden");

  gameInterval = setInterval(() => {
    timeLeft--;
    timeDisplay.textContent = `Час: ${timeLeft}`;
    if (timeLeft <= 0) {
      clearInterval(gameInterval);
      alert(`Гра закінчена! Ваші очки: ${score}`);
      gameArea.classList.add("hidden");
    }
  }, 1000);
});

targetButton.addEventListener("click", () => {
  score++;
  scoreDisplay.textContent = `Очки: ${score}`;
  const maxX = window.innerWidth - targetButton.clientWidth;
  const maxY = window.innerHeight - targetButton.clientHeight;
  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  targetButton.style.left = `${randomX}px`;
  targetButton.style.top = `${randomY}px`;
});
