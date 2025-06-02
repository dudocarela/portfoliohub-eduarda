const gameArea = document.getElementById('game-area');
const clickBox = document.getElementById('click-box');
const scoreDisplay = document.getElementById('score');

let score = 0;
let boxTimeout;

function moveBox() {
  const maxX = gameArea.clientWidth - clickBox.clientWidth;
  const maxY = gameArea.clientHeight - clickBox.clientHeight;
  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);
  
  clickBox.style.left = randomX + 'px';
  clickBox.style.top = randomY + 'px';
}

function startGame() {
  moveBox();
  boxTimeout = setTimeout(() => {
    alert('Fim do jogo! Sua pontuação: ' + score);
    score = 0;
    scoreDisplay.textContent = score;
  }, 30000); // 30 segundos de jogo
}

clickBox.addEventListener('click', () => {
  score++;
  scoreDisplay.textContent = score;
  moveBox();
});

window.onload = () => {
  startGame();
};
