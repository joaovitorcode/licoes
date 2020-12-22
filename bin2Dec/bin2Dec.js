let resultadoP = document.querySelector('.resultado p');
let entradaInput = document.querySelector('.entrada input');
let entradaButton = document.querySelector('.entrada button');

entradaButton.addEventListener('click', () => {

    // Separa cada caractere da string transformando-o num item de um array
    let array = entradaInput.value.split('');
    let novoArray = [];
    let base = 2;
    
    array.forEach((elemento, indice) => {
        
        let expoente = (array.length - 1) - indice;
        novoArray.push((base ** expoente) * Number(elemento));
    });
    
    let resultado = novoArray.reduce((soma, item) => {

        return soma + item;
    })

    resultadoP.textContent = resultado;
    console.log(resultado);
})

/*
Referência:
https://www.youtube.com/watch?v=zToihF2FE9I&ab_channel=GCFAprendeLivre
*/