let pResultado = document.querySelector('p');
let input1 = document.querySelector('#input-1');
let input2 = document.querySelector('#input-2');
let botaoSomar = document.querySelector('button');
botaoSomar.addEventListener('click', (event) => {
    
    event.preventDefault();
    calcular(input1, input2)
});

function calcular(num1, num2) {

    let res = Number(num1.value) + Number(num2.value);
    pResultado.textContent = `${num1.value} + ${num2.value} = ${res}`;

    num1.value = '';
    num2.value = '';
    num1.focus();
}