const polvo = document.querySelector('.polvo');
const pipe = document.querySelector('.pipe');
const restartBtn = document.getElementById('restart-btn');
const scoreDisplay = document.getElementById('score');

let score = 0;
let isGameOver = false;

const jump = () => {
    if (!isGameOver) {
        polvo.classList.add('jump');

        setTimeout(() => {
            polvo.classList.remove('jump');
        }, 500);
    }
};

const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const polvoPosition = +window.getComputedStyle(polvo).bottom.replace('px', '');


    if (pipePosition <= 120 && pipePosition > 0 && polvoPosition < 80) {
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        polvo.style.animation = 'none';
        polvo.style.bottom = `${polvoPosition}px`;

        polvo.src = 'imagens/game-over.png';
        polvo.style.width = '150px';
        polvo.style.marginLeft = '50px';

        clearInterval(loop);
        restartBtn.style.display = 'block';
        isGameOver = true;
    }


    if (pipePosition < 0 && !isGameOver) {
        score++;
        scoreDisplay.textContent = score;
        pipe.style.right = '-100px';
    }
}, 10);

document.addEventListener('keydown', jump);

restartBtn.addEventListener('click', () => {
    location.reload();
});
