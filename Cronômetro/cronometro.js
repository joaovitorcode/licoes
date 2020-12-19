let input = document.querySelector('input');
let button = document.querySelector('button');
let timer = document.querySelector('.timer');
let hh = 0;
let mm = 0;
let ss = 0;

button.addEventListener('click', () => {inicia()})

function inicia() {

    input.value.split(':').forEach((item, indice) => {

        switch (indice) {
            case 0:
                hh = item;
                break;
            case 1:
                mm = item;
                break;
            case 2:
                ss = (item);
                break;
            default:
                console.log('Erro');
                break;
        }
    });

    setInterval(() => {conta()}, 1000);
}

function conta() {

    if (ss == 00) {
        
        ss = 60;
        mm--;
        
        if (mm == 00) {
            
            mm = 60;
            hh--;
        }
    }
    ss--;
    
    timer.textContent = `${hh}:${mm}:${ss}`;
}

/*
Referências:

https://www.youtube.com/watch?v=QSW1374FCt4&ab_channel=SatellaSoft

https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/switch

https://developer.mozilla.org/pt-BR/docs/Web/API/WindowOrWorkerGlobalScope/setInterval
*/