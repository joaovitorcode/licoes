let pOutput = document.querySelector('output p');
let input = document.querySelector('.input input');
let button = document.querySelector('.input button');

converte(input);

function converte(numBin) {

    button.addEventListener('click', (event) => {

        event.preventDefault();

        // Separa cada caractere da string transformando-o num item de um array
        let array = numBin.value.split('');
        let novoArray = [];
        let base = 2;
        
        array.forEach((elemento, indice) => {
            
            let expoente = (array.length - 1) - indice;
            novoArray.push((base ** expoente) * Number(elemento));
        });
        
        let resultado = novoArray.reduce((soma, item) => {

            return soma + item;
        })
        console.log(resultado);
    })
}

/*
Referência:
https://www.youtube.com/watch?v=zToihF2FE9I&ab_channel=GCFAprendeLivre
*/