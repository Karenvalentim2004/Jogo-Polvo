const polvo = document.querySelector('.polvo');
const pipe = document.querySelector('.pipe');

const jump = () => {
    polvo.classList.add('jump');


    setTimeout(() => {
        polvo.classList.remove('jump');
    }, 500);


}


const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft;
    const polvoPosition = +window.getComputedStyle(polvo).bottom.replace('px', '');

    if (pipePosition <= 120 && pipePosition > 0 && polvoPosition < 80) {

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        polvo.style.animation = 'none';
        polvo.style.left = `${polvoPosition}px`;

        polvo.src = 'imagens/game-over.png';
        polvo.style.width = '75px';
        polvo.style.marginLeft = '50px';

        clearInterval(loop);
    }

}, 10);

document.addEventListener('keydown', jump);