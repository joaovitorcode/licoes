let dataEntrada = document.querySelector('.data-entrada');
let dataResultado = document.querySelector('.data-resultado');

setInterval(atualiza, 1000);

function atualiza() {
   
    const dataAtual = new Date();
    // O método parse() converte uma string em data
    const dataEscolhida = Date.parse(dataEntrada.value);

    const diferenca = dataEscolhida - dataAtual;
    const dia = Math.floor(diferenca / 1000 / 60 / 60 / 24);
    const horas = Math.floor(diferenca / 1000 / 60 / 60) % 24;
    const minutos = Math.floor(diferenca / 1000 / 60) % 60;
    const segundos = Math.floor(diferenca / 1000) % 60;

    if (dataEntrada.value === '') {

        dataResultado.textContent = '00 : 00 : 00 : 00';
    } else {

        dataResultado.textContent = `
            ${dia} : ${horas} : ${minutos} : ${segundos}
        `;
    }

}

/*
REFERÊNCIAS:

setInterval
https://www.youtube.com/watch?v=dmXI2HdZ-FA&ab_channel=RogerMelo

setInterval
https://developer.mozilla.org/pt-BR/docs/Web/API/WindowOrWorkerGlobalScope/setInterval

InputEvent
https://developer.mozilla.org/en-US/docs/Web/API/InputEvent/data

Date
https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date

*/