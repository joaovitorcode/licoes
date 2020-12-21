let inputValor = document.querySelector('.input-valor');
let adicionar = document.querySelector('.adicionar');
let sortear = document.querySelector('.sortear');
let caixaValor = document.querySelector('.caixa-valor');
let caixaSorteio = document.querySelector('.caixa-sorteio');
let valores = [];
let indiceSorteado = 0;

adicionar.addEventListener('click', () => {

    valores.push(inputValor.value);
    caixaValor.textContent = valores.join('\n');

    inputValor.value = '';
    inputValor.focus();
})

sortear.addEventListener('click', () => {

    sorteia();
    caixaSorteio.textContent = valores[indiceSorteado];
})

function sorteia() {

    indiceSorteado = Math.floor(Math.random() * 10);

    while (indiceSorteado >= valores.length) {

        indiceSorteado = Math.floor(Math.random() * 10);
    }
}