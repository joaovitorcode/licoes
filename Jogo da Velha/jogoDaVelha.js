let quadradoMaior = document.querySelector('.quadrado-maior');
let quadradoMenor = document.querySelectorAll('.quadrado-menor');
let quemJoga = document.querySelector('.quem-joga');
let trocaJogador = true;

quadradoMaior.addEventListener('mousedown', (event) => {

    if (trocaJogador) {

        event.target.textContent = 'X';
        quemJoga.textContent = 'Vez de "O" jogar';
        trocaJogador = false;
    } else {

        event.target.textContent = 'O';
        quemJoga.textContent = 'Vez de "X" jogar';
        trocaJogador = true;
    } 
});
