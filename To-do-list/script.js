let input = document.querySelector('input');
let button = document.querySelector('button');
let output = document.querySelector('.caixa-output');

button.addEventListener('click', () => {

    addCheckbox(input);
})


function addCheckbox(valor) {

    let checkbox = `<div class="item"><input class="checkbox" type="checkbox">${valor.value}</div>`;

    output.innerHTML += checkbox;

    input.value = '';
    input.focus();
}