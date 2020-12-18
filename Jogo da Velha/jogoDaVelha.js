let quadradoMaior = document.querySelector('.quadrado-maior');
let quadradoMenor = document.querySelectorAll('.quadrado-menor');
let info = document.querySelector('.info');
let trocaJogador = true;

quadradoMaior.addEventListener('mousedown', (event) => {

    if (trocaJogador) {

        event.target.textContent = 'X';
        info.textContent = 'Vez de "O" jogar';
        trocaJogador = false;
    } else {

        event.target.textContent = 'O';
        info.textContent = 'Vez de "X" jogar';
        trocaJogador = true;
    }
});