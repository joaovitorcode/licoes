let pResultado = document.querySelector('.resultado');
let inputMin = document.querySelector('.min');
let inputMax = document.querySelector('.max');
let buttonGerar = document.querySelector('.gerar');

buttonGerar.addEventListener('click', () => {

    mostraResultado();
})

function mostraResultado() {

    pResultado.textContent = geraNumero(inputMin.value, inputMax.value);
}

function geraNumero(min, max) {

    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}