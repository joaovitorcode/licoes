let dataInput = document.querySelector('.data-input');
let dataOutput = document.querySelector('.data-output');

setInterval(atualiza, 1000);

function atualiza() {
   
    const dataAtual = new Date();
    // O método parse() converte uma string em data
    const dataEscolhida = Date.parse(dataInput.value);

    const diferenca = dataEscolhida - dataAtual;
    const dia = Math.floor(diferenca / 1000 / 60 / 60 / 24);
    const horas = Math.floor(diferenca / 1000 / 60 / 60) % 24;
    const minutos = Math.floor(diferenca / 1000 / 60) % 60;
    const segundos = Math.floor(diferenca / 1000) % 60;

    if (dataInput.value === '') {

        dataOutput.textContent = '';
    } else {

        dataOutput.textContent = `
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