let resultado = document.querySelector('.resultado');
let valorDigitado = document.querySelector('.valor');

let igual = document.querySelector('.igual');

let adicao = document.querySelector('.adicao');
let subtracao = document.querySelector('.subtracao');
let multiplicacao = document.querySelector('.multiplicacao');
let divisao = document.querySelector('.divisao');

let conta = '';
let agregador = 0;
let operacaoAnterior = '';

igual.addEventListener('click', () => {

    mostraConta(igual.textContent);
});

adicao.addEventListener('click', () => {

    mostraConta(adicao.textContent);
});

subtracao.addEventListener('click', () => {

    mostraConta(subtracao.textContent);
});

multiplicacao.addEventListener('click', () => {

    mostraConta(multiplicacao.textContent);
});

divisao.addEventListener('click', () => {

    mostraConta(divisao.textContent);
});


function mostraConta(operacao) {

    conta += ` ${operacaoAnterior} ${valorDigitado.value}`;
    resultado.textContent = conta;
    
    calculaConta(operacaoAnterior, valorDigitado.value);
    
    operacaoAnterior = operacao;
    
    valorDigitado.value = '';
    valorDigitado.focus();

    // Para exibir o resultado final, ex: x + y = resultado final
    if (operacao == '=') resultado.textContent += ` = ${agregador}`;
}


function calculaConta(operacao, valor) {

    // agregador
    switch (operacao) {
        case '':
            agregador += Number(valor);
            console.log(valor);
            break;
        case '+':
            agregador += Number(valor);
            console.log(valor);
            break;
        case '-':
            agregador -= Number(valor);
            console.log(valor);
            break;
        case 'x':
            agregador *= Number(valor);
            console.log(valor);
            break;
        case '/':
            agregador /= Number(valor);
            console.log(valor);
            break;
        default:
            console.log(valor);
    }
    console.log('agregador = ', agregador);
}